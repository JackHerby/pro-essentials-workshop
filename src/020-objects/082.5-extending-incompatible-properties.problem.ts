// type UserPart = {
//   id: string;
//   name: string;
//   age: number;
// };
//
// type UserPart2 = {
//   id: number;
//   phone: string;
// };
//
// type User = UserPart & UserPart2;

interface UserPart {
  id: string;
  name: string;
  age: number;
};

interface UserPart2 {
  id: number;
  phone: string;
};

// Changing type keyword to interface "moves" error from `id` key
// to `User` interface, thus making it easier to debug.
interface User extends UserPart, UserPart2 {}

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
