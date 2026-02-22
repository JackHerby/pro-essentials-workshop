import { expect, it } from "vitest";

type InitialPosition = { x: number; y: number };

class CanvasNode {
  // x: number;
  // y: number;
  // Due to the constructor annotations, you don't need to type  x and y.
  x;
  y;

  constructor(initalPosition?: InitialPosition) {
    this.x = initalPosition?.x || 0;
    this.y = initalPosition?.y || 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

it("Should be able to move", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  canvasNode.move(10, 20);

  expect(canvasNode.x).toEqual(10);
  expect(canvasNode.y).toEqual(20);
});

it("Should be able to receive an initial position", () => {
  const canvasNode = new CanvasNode({
    x: 10,
    y: 20,
  });

  expect(canvasNode.x).toEqual(10);
  expect(canvasNode.y).toEqual(20);
});
