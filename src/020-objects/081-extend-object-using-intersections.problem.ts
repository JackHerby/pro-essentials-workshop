import { Extends, Expect } from "@total-typescript/helpers";

// type User = {
//   id: string;
//   createdAt: Date;
//   name: string;
//   email: string;
// };
//
// type Product = {
//   id: string;
//   createdAt: Date;
//   name: string;
//   price: number;
// };

type Base = {
  id: string;
  createdAt: Date;
}

type User = {
  name: string;
  email: string;
} & Base;

type Product = {
  name: string;
  price: number;
} & Base;

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
