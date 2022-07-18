import nextGreaterElement from "../problems/nextGreaterElement.js";
import chai from "chai";

let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;

describe("nextGreaterElement Test", () => {
  describe(
    "#input equal to output",
    it("should return next greater elements collection", () => {
      const input = [4, 11, 6, 3, 2, 8, 1];
      const output = [11, -1, 8, 8, 8, -1, -1];

      expect(nextGreaterElement(input)).to.deep.equal(output);
    })
  );

  describe("return an array", () => {
    expect(nextGreaterElement([4, 6, 3, 2, 8, 1])).to.be.an("array");
  });

  describe("should throw an error if input is not an array", () => {
    expect(() => {
      nextGreaterElement("Something");
    }).throw("Invalid Args!");
  });
});
