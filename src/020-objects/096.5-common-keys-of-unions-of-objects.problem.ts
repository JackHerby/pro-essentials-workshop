import { expect, it } from "vitest";

type Base = {
  id: string;
  name: string;
};

type User = {
  age: number;
  imageId: string;
} & Base;

type Organisation = {
  address: string;
  imageId: string;
} & Base;

type Product = {
  price: number;
  imageId: string;
} & Base;

type Entity = User | Organisation | Product;

const getAvatarImage = (entity: Entity) => {
  {
    // Should not be able to access properties that are
    // not common to both types

    // @ts-expect-error
    entity.age;

    // @ts-expect-error
    entity.address;

    // @ts-expect-error
    entity.price;
  }

  return {
    url: `https://via.placeholder.com/${entity.imageId}`,
    alt: `${entity.name} Avatar`,
  };
};

it("Should work for a user", () => {
  const result = getAvatarImage({
    id: "1",
    name: "John",
    age: 20,
    imageId: "abc123",
  });

  expect(result).toEqual({
    url: "https://via.placeholder.com/abc123",
    alt: "John Avatar",
  });
});

it("Should work for an organisation", () => {
  const result = getAvatarImage({
    id: "1",
    name: "Total TypeScript",
    address: "1 Main Street",
    imageId: "abc123",
  });

  expect(result).toEqual({
    url: "https://via.placeholder.com/abc123",
    alt: "Total TypeScript Avatar",
  });
});

it("Should work for a product", () => {
  const result = getAvatarImage({
    id: "1",
    name: "TypeScript Mug",
    price: 10,
    imageId: "abc123",
  });

  expect(result).toEqual({
    url: "https://via.placeholder.com/abc123",
    alt: "TypeScript Mug Avatar",
  });
});
