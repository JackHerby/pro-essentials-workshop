import { Equal, Expect } from "@total-typescript/helpers";

// CODE

// const isProblemOrSolution = (filename: string): boolean => {
//   const splitFilename: string[] = filename.split(".");
//
//   const finalIndex: number = splitFilename.length - 1;
//
//   const extension: string | undefined = splitFilename[finalIndex];
//
//   const isProblem: boolean = extension === "problem";
//
//   const isSolution: boolean = extension === "solution";
//
//   return isProblem || isSolution;
// };

const isProblemOrSolution = (filename: string) => {
  const splitFilename = filename.split(".");

  const finalIndex = splitFilename.length - 1;

  const extension = splitFilename[finalIndex];

  const isProblem = extension === "problem";

  const isSolution = extension === "solution";

  return isProblem || isSolution;
};

// TESTS

type test1 = Expect<
  Equal<typeof isProblemOrSolution, (filename: string) => boolean>
>;

// CODE

// const users: {
//   name: string;
// }[] = [
//   {
//     name: "Waqas",
//   },
//   {
//     name: "Zain",
//   },
// ];
const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];


// const usersWithIds: {
//   id: number;
//   name: string;
// }[] = users.map(
//   (
//     user: {
//       name: string;
//     },
//     index: number,
//   ) => ({
//     ...user,
//     id: index,
//   }),
// );
const usersWithIds = users.map((user, index) => ({ ...user, id: index }));

// TESTS

type test2 = Expect<
  Equal<
    typeof usersWithIds,
    {
      id: number;
      name: string;
    }[]
  >
>;
