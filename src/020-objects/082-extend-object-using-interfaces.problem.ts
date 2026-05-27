import { Extends, Expect } from "@total-typescript/helpers";

// type BaseEntity = {
//   id: string;
//   createdAt: Date;
// };
//
// type User = {
//   name: string;
//   email: string;
// } & BaseEntity;
//
// type Product = {
//   name: string;
//   price: number;
// } & BaseEntity;

interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface User extends BaseEntity {
  name: string;
  email: string;
}

interface Product extends BaseEntity {
  name: string;
  price: number;
}

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
