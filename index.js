// npm run start -- --username=type_here_your_name
import os from "node:os";
import readlinePromises from "node:readline/promises";
import process from "node:process";
import {
  OPERATION_ERROR,
  INVALID_INPUT_MESSAGE,
  OPERATIONS,
  EXIT_MESSAGE,
  WELLCOME_MESSAGE,
} from "./constants.js";
import commandsHandler from "./commandsHandler.js";

const start = async () => {
  // greeting
  const userName = process.argv
    .find((el) => el.startsWith("--username="))
    ?.split("=")[1];
  console.log(WELLCOME_MESSAGE(userName));

  // change to home directory - cd
  // cd(os.homedir());
  // process.chdir(os.homedir());
  // console.log(`You are currently in ${process.cwd()}`);

  // program should prompt user in console to print commands and wait for results
  console.log("Please, print commands and wait for results");

  // the program
  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", async (line) => {
    const command = line.split(" ")[0].trim();
    const argv = line.split(" ").slice(1);
    console.log(argv);

    if (OPERATIONS.includes(command)) await commandsHandler(command, argv, rl);
    else console.log(INVALID_INPUT_MESSAGE);

    // At the start of the program and after each end of input/operation current working directory should be printed
    console.log(`You are currently in ${process.cwd()}`);
  });

  // ctrl + c pressed or user sent .exit command into console
  process.on("exit", () => {
    console.log(EXIT_MESSAGE(userName));
  });
};

start();
