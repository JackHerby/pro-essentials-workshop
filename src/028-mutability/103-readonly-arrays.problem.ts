// function printNames(names: string[]) {
// function printNames(names: readonly string[]) {
function printNames(names: ReadonlyArray<string>) {
  for (const name of names) {
    console.log(name);
  }

  // @ts-expect-error
  names.push("John");

  // @ts-expect-error
  names[0] = "Billy";
}
