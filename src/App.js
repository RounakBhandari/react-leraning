import { useCocktailCategoryQuery } from "./features/cocktail/cocktail";

const App = () => {
  const m = useCocktailCategoryQuery();
  console.log(m);
  return <div>App</div>;
};
export default App;
