import { test } from "vitest";
import { dlog } from "berry-pretty";

test(`example`, () => {
  dlog(`Hello, World!`);
  console.log("did I say hello?");
});
