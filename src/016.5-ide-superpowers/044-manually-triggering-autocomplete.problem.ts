type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!
  foo: "",
  bar: 0,
  baz: false,
});

document.addEventListener(
  // Autocomplete this string!
  "DOMContentLoaded",
  (event) => {
    console.log(event);
  },
);
