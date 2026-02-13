type Event = {
  message: string;
};

const processUserMap = (eventMap: Map<string, Event>) => {
  // .get returns T | undefined
  const error = eventMap.get("error");
  if (error) {
    const message = error.message;

    throw new Error(message);
  }
};
