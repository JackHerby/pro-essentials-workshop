const objOfFunctions = {
  string: (input: string) => input.toUpperCase(),
  number: (input: number) => input.toFixed(2),
  boolean: (input: boolean) => (input ? "true" : "false"),
};

// const format = (input: string | number | boolean) => {
//   const inputType = typeof input as "string" | "number" | "boolean";
//   const formatter = objOfFunctions[inputType];
//
//   return formatter(input);
// };

// const format = (input: string | number | boolean) => {
//   if (typeof input === "string") {
//     return objOfFunctions.string(input);
//   }
//
//   if (typeof input === "number") {
//     return objOfFunctions.number(input);
//   }
//
//   if (typeof input === "boolean") {
//     return objOfFunctions.boolean(input);
//   }
// };

const format = (input: string | number | boolean) => {
  const inputType = typeof input as "string" | "number" | "boolean";
  const formatter = objOfFunctions[inputType];

  // ??? weird, but that's the solution
  return formatter(input as never);
};
