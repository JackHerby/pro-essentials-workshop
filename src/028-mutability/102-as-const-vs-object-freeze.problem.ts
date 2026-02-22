type ButtonType = "button" | "submit" | "reset";

type ButtonAttributes = {
  cancel: {
    type: ButtonType;
  };
  confirm: {
    type: ButtonType;
  };
};

const modifyButtons = (attributes: ButtonAttributes) => {};

// Apparently the solution is not to use Object.freeze, and use as const instead.
// I've found a couple of things working, though.
// Object.freeze works only on the top level.

const buttonAttributes = {
  cancel: {
    type: "button",
  },
  confirm: {
    type: "button",
  },
} as const;

// const buttonAttributes: ButtonAttributes = Object.freeze({
//   cancel: {
//     type: "button",
//   },
//   confirm: {
//     type: "button",
//   },
// });

// const buttonAttributes = Object.freeze<ButtonAttributes>({
//   cancel: {
//     type: "button",
//   },
//   confirm: {
//     type: "button",
//   },
// });

// const buttonAttributes = Object.freeze({
//   cancel: {
//     type: "button",
//   },
//   confirm: {
//     type: "button",
//   },
// } as const);

modifyButtons(buttonAttributes);
