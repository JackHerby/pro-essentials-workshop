const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }

  return "all good";
};

try {
  somethingDangerous();
} catch (error) {
  // How do we change this code to make it
  // not show a red squiggly?
  // if (true) {
  //   console.error(error.message);
  // }
  if (error instanceof Error) {
    console.error(error.message);
  }
  // Throws "unknown" errors, for example when function throws a string rather than Error instance.
  throw error
}
