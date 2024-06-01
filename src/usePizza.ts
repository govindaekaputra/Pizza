import { useEffect, useReducer, useState } from "react";
import { Pizza, PizzaSize, Topping } from "./data";

interface State {
  selected_pizza: Pizza | undefined;
  selected_size: PizzaSize;
  selected_toppings: Topping[];
}

type StateAction =
  | { type: "selectPizza"; value: State["selected_pizza"] }
  | { type: "selectSize"; value: State["selected_size"] }
  | { type: "setToppings"; value: State["selected_toppings"] };

const initialState: State = {
  selected_pizza: undefined,
  selected_size: PizzaSize.Medium,
  selected_toppings: [],
};

function stateReducer(state: State, action: StateAction): State {
  switch (action.type) {
    case "selectPizza":
      return { ...state, selected_pizza: action.value };
    case "selectSize":
      return { ...state, selected_size: action.value };
    case "setToppings":
      return { ...state, selected_toppings: action.value };

    default:
      throw new Error("Unknown action");
  }
}

export function usePizza() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [totalPrice, setTotalPrice] = useState(0);

  const selectPizza = (value: Pizza) => {
    if (state.selected_toppings.length > 0) {
      dispatch({
        type: "setToppings",
        value: state.selected_toppings.filter((topping) =>
          value.selectable_toppings.includes(topping.id)
        ),
      });
    }
    dispatch({ type: "selectPizza", value });
  };
  const selectSize = (value: PizzaSize) => {
    dispatch({ type: "selectSize", value });
  };
  const selectTopping = (value: Topping) => {
    const arr = [...state.selected_toppings];
    const index = arr.findIndex((topping) => topping.id === value.id);
    index !== -1 ? arr.splice(index, 1) : arr.push(value);
    dispatch({ type: "setToppings", value: arr });
  };

  useEffect(() => {
    const totalPriceWithoutSize =
      (state.selected_pizza?.price || 0) +
      state.selected_toppings.reduce(
        (partialSum, a) => partialSum + a.price,
        0
      );
    let result = totalPriceWithoutSize;
    if (result > 0) {
      switch (state.selected_size) {
        case PizzaSize.Small:
          result -= 1;
          break;
        case PizzaSize.Large:
          result += 2;
          break;
      }
    }
    setTotalPrice(result);
  }, [state]);

  return { state, totalPrice, selectPizza, selectSize, selectTopping };
}
