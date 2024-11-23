import { test } from "vitest";
import { dlog } from "berry-pretty";
import { printTable } from "console-table-printer";

test(`example`, () => {
  dlog(`Hello, World!`);
  //  printTable([{ a: 1, b: 2 }]); // also fails to appear in Wallaby log
  console.log("did I say hello?");
});
