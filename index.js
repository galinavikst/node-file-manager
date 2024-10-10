// npm run start -- --username=your_username
import os from "node:os";
import readlinePromises from "node:readline/promises";
import { ERROR_MESSAGE, OPERATIONS } from "./constants.js";

const userName = process.argv
  .find((el) => el.startsWith("--username="))
  ?.split("=")[1];
console.log(`Welcome to the File Manager, ${userName || "Username"}!`);

const homedir = os.homedir();
console.log(homedir);

console.log(`You are currently in ${import.meta.dirname}`);
////

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commandsHandler = (command) => {
  if (OPERATIONS.includes(command))
    switch (command) {
      case "cd":
        console.log("cd - line");
        break;

      default:
        break;
    }
  else console.log(ERROR_MESSAGE);
};

rl.on("line", (line) => {
  commandsHandler(line.trim());
});

// ctrl + c pressed or user sent .exit command into console
process.on("exit", () => {
  console.log(EXIT_MESSAGE(userName));
});
