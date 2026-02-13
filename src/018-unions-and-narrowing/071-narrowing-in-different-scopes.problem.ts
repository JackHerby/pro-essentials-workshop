import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[],
) => {
  // saving searchParams.name to a variable solves the issue below
  // also, works with let
  // let searchParamsName = searchParams.name
  const searchParamsName = searchParams.name;
  if (searchParamsName) {
    return users.filter((user) => {
      // in the scope of .filter, searchParams.name loses the narrowing in the if statement
      // because the callback of .filter may run after searchParams.name has been mutated
      // that's why saving it to the local variable helps
      return user.name.includes(searchParamsName);
    });
  }

  return users;
};

it("Should find the exact name", () => {
  const result = findUsersByName(
    {
      name: "Bob",
    },
    [
      {
        id: "1",
        name: "Bob",
      },
      {
        id: "2",
        name: "Alice",
      },
    ],
  );

  expect(result).toEqual([
    {
      id: "1",
      name: "Bob",
    },
  ]);

  type test = Expect<Equal<typeof result, { id: string; name: string }[]>>;
});
