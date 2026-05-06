type Ingredient = {
  name: string;
  quantity: string;
};

type Recipe = {
  title: string;
  ingredients: Ingredient[];
  // alternative solution
  // ingredients: Array<Ingredient>;
  instructions: string;
};

// You can also type stuff inline.
type RecipeAlt = {
  title: string;
  ingredients: {
    name: string;
    quantity: string;
  }[];
  // alternative solution
  // ingredients: Array<{
  //   name: string;
  //   quantity: string;
  // }>;
  instructions: string;
};

const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe in here
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});
