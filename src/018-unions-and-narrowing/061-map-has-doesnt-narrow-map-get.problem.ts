type Event = {
  message: string;
};

const processUserMap = (eventMap: Map<string, Event>) => {
  // if (eventMap.has("error")) {
  //   const message = eventMap.get("error").message;
  //
  //   throw new Error(message);
  // }
  // .get returns T | undefined
  const error = eventMap.get("error");
  if (error) {
    const message = error.message;

    throw new Error(message);
  }
};
