import { OPERATION_ERROR, INVALID_INPUT_MESSAGE } from "./constants.js";
import cd from "./operations/cd.js";
import up from "./operations/up.js";
import ls from "./operations/ls.js";
import cat from "./operations/cat.js";
import add from "./operations/add.js";

const commandsHandler = async (command, args, rl) => {
  try {
    switch (command) {
      case "cd":
        if (args.length === 1) cd(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "up":
        if (args.length) return console.log(INVALID_INPUT_MESSAGE);
        await up();
        break;

      case "ls":
        if (args.length) return console.log(INVALID_INPUT_MESSAGE);
        ls();
        break;

      case "cat":
        if (args.length === 1) cat(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "add":
        if (args.length === 1) await add(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case ".exit":
        rl.close();
        break;
    }
  } catch (error) {
    console.log(OPERATION_ERROR);
  }
};

export default commandsHandler;
