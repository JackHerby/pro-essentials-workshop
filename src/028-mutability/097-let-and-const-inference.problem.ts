// CODE
type ButtonType = "button" | "submit" | "reset";

// let are inferred as string, because a variable declared with let can be mutated
// let type = "button";

// let type: ButtonType = "button";
const type = "button";

// TESTS

type ButtonAttributes = {
  type: ButtonType;
};

const buttonAttributes: ButtonAttributes = {
  type,
};
