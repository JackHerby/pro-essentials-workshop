interface FetchOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

// const options = {
//   url: "/",
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // @ts-expect-error
//   search: new URLSearchParams({
//     limit: "10",
//   }),
// };

const myFetch = async (options: FetchOptions) => {};

// myFetch(options);

myFetch({
  url: "/",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  // @ts-expect-error
  search: new URLSearchParams({
    limit: "10",
  }),
});

const options: FetchOptions = {
  url: "/",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  // @ts-expect-error
  search: new URLSearchParams({
    limit: "10",
  }),
};

myFetch(options);

const options2 = {
  url: "/",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  // @ts-expect-error
  search: new URLSearchParams({
    limit: "10",
  }),
} satisfies FetchOptions;

myFetch(options2)
