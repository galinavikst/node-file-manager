// npm run start -- --username=your_username
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
import cd from "./operations/cd.js";
import up from "./operations/up.js";
import ls from "./operations/ls.js";

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

  const commandsHandler = (command, args) => {
    try {
      switch (command) {
        case "cd":
          if (args.length === 1) cd(...args);
          else return console.log(INVALID_INPUT_MESSAGE);
          break;

        case "up":
          if (args.length) return console.log(INVALID_INPUT_MESSAGE);
          up();
          break;

        case "ls":
          if (args.length) return console.log(INVALID_INPUT_MESSAGE);
          ls();
          break;

        case ".exit":
          rl.close();
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(OPERATION_ERROR);
    }
  };

  rl.on("line", (line) => {
    const command = line.split(" ")[0].trim();
    const argv = line.split(" ").slice(1);
    console.log(argv);

    if (OPERATIONS.includes(command)) commandsHandler(command, argv);
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
