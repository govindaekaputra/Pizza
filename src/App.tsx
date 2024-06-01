import "./App.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import { PizzaSize, pizzas, toppings } from "./data";
import { usePizza } from "./usePizza";

function App() {
  const { state, totalPrice, selectPizza, selectSize, selectTopping } =
    usePizza();
  return (
    <>
      <Typography variant="h3">Pizza</Typography>
      <RadioGroup row name="pizza">
        <Grid container spacing={2}>
          {pizzas.map((pizza) => (
            <Grid key={pizza.id} item xs={12} sm={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={pizza.image}
                  alt={pizza.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {pizza.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`$${pizza.price}`}
                  </Typography>
                  <Radio
                    value={pizza.id}
                    checked={state.selected_pizza === pizza}
                    onChange={(e) => {
                      selectPizza(pizza);
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
      <Typography variant="h3">Size</Typography>
      <RadioGroup
        row
        name="pizza-size"
        onChange={(e) => {
          const value = e.target.value as unknown as PizzaSize;
          selectSize(value);
        }}
      >
        {Object.values(PizzaSize).map((size) => (
          <FormControlLabel
            key={size}
            value={size}
            checked={state.selected_size === size}
            control={<Radio />}
            label={size}
            labelPlacement="bottom"
          />
        ))}
      </RadioGroup>
      <Typography variant="h3">Toppings</Typography>
      <Grid container spacing={2}>
        {toppings.map((topping) => (
          <Grid key={topping.id} item xs={12} sm={3}>
            <Grid item xs={6} sm={3}>
              <FormControlLabel
                disabled={
                  state.selected_pizza !== undefined &&
                  !state.selected_pizza.selectable_toppings.includes(topping.id)
                }
                checked={state.selected_toppings
                  .map((curr) => curr.id)
                  .includes(topping.id)}
                control={<Checkbox />}
                value={topping.id}
                label={topping.name}
                onChange={(e) => {
                  selectTopping(topping);
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3">Price</Typography>
      <Typography variant="h4">{`$${totalPrice}`}</Typography>
    </>
  );
}

export default App;
