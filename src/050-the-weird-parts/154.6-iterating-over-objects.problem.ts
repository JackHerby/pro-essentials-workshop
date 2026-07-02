import { expect, it, vitest } from "vitest";

interface User {
  id: number;
  name: string;
}

// function printUser(user: User) {}

// function printUser(user: User) {
//   Object.keys(user).forEach((key) => {
//     console.log(user[key as keyof User])
//   })
// }


// function printUser(user: User) {
//   for (const key of Object.keys(user)) {
//     console.log(user[key as keyof User])
//   }
// }

// function printUser(user: User) {
//   (Object.keys(user) as (keyof User)[]).forEach((key) => {
//     console.log(user[key])
//   })
// }

// function printUser(user: User) {
//   (Object.keys(user) as Array<keyof User>).forEach((key) => {
//     console.log(user[key])
//   })
// }

// function printUser(user: User) {
//   for (const key of Object.keys(user) as (keyof User)[]) {
//     console.log(user[key])
//   }
// }

// function printUser(user: User) {
//   for (const key of Object.keys(user) as Array<keyof User>) {
//     console.log(user[key])
//   }
// }

// function printUser(user: Record<string, any>) {
//   Object.keys(user).forEach((key) => {
//     console.log(user[key])
//   })
// }

function printUser(user: Record<string, any>) {
  for (const key of Object.keys(user)) {
    console.log(user[key])
  }
}

it("Should log all the keys of the user", () => {
  const consoleSpy = vitest.spyOn(console, "log");

  printUser({
    id: 1,
    name: "Waqas",
  });

  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith("Waqas");
});
