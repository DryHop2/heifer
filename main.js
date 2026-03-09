import { moo } from "./moo.js";
import { say } from "cowsay";

const NAME = "Tyler";
console.log(say({ text: moo(NAME) }));
