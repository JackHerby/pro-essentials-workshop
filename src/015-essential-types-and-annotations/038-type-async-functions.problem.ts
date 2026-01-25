import { Expect, Equal } from "@total-typescript/helpers";

async function fetchData(): Promise<number> {
  const response = await fetch("https://api.example.com/data");
  // alternatively const data: number = await response.json();
  // however Promise<T> as return type is more common
  const data = await response.json();
  return data;
}

const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>;
};
