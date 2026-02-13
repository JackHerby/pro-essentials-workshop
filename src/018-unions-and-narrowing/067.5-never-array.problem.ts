const shoppingCart: {
  items: string[];
} = {
  // empty arrays in TS are never[] by default
  items: [],
};

console.log(shoppingCart.items);

shoppingCart.items.push("Apple");
shoppingCart.items.push("Banana");
