import { describe, expect, it } from "vitest";

class CanvasNode {
  x = 0;
  y = 0;

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// NOTE: typeof CanvasNodeType describes the type of constructor function, not object instance
// type CanvasNodeType = typeof CanvasNode

const positionFromCanvasNode = (node: CanvasNode) => {
// NOTE: also possible:
// const positionFromCanvasNode = (node: { x: number, y: number }) => {
  return {
    x: node.x,
    y: node.y,
  };
};

describe("positionFromCanvasNode", () => {
  it("Should return the position of the node", () => {
    const canvasNode = new CanvasNode();

    expect(positionFromCanvasNode(canvasNode)).toEqual({ x: 0, y: 0 });

    canvasNode.move(10, 20);

    expect(positionFromCanvasNode(canvasNode)).toEqual({ x: 10, y: 20 });
  });
});
