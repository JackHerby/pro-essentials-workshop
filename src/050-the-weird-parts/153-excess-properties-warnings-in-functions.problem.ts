interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];

// const usersWithIds: User[] = users.map((user, index) => ({
//   ...user,
//   id: index,
//   // @ts-expect-error
//   age: 30,
// }));

const usersWithIds: User[] = users.map((user, index): User => ({
  ...user,
  id: index,
  // @ts-expect-error
  age: 30,
}));

const users2 = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];

const usersWithIds2: User[] = users2.map((user, index) => ({
  ...user,
  id: index,
  // @ts-expect-error
  age: 30,
}) satisfies User);
