import * as fsPromises from "node:fs/promises";
import { OPERATION_ERROR, INVALID_INPUT_MESSAGE } from "./constants.js";
import cd from "./operations/fs/cd.js";
import up from "./operations/fs/up.js";
import ls from "./operations/fs/ls.js";
import cat from "./operations/fs/cat.js";
import add from "./operations/fs/add.js";
import rn from "./operations/fs/rn.js";
import cp from "./operations/fs/cp.js";
import hash from "./operations/crypto/hash.js";

const commandsHandler = async (command, args, rl) => {
  try {
    switch (command) {
      case "cd":
        if (args.length === 1) await cd(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "up":
        if (args.length) return console.log(INVALID_INPUT_MESSAGE);
        await up();
        break;

      case "ls":
        if (args.length) return console.log(INVALID_INPUT_MESSAGE);
        await ls();
        break;

      case "cat":
        if (args.length === 1) cat(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "add":
        if (args.length === 1) await add(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "rn": // path_to_file (depend of process.cwd()),  new_filename
        if (args.length === 2) await rn(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "cp": // path_to_file, path_to_new_directory
        if (args.length === 2) await cp(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "mv": // path_to_file, path_to_new_directory
        if (args.length === 2) {
          const isSourseCopied = await cp(...args);
          if (isSourseCopied) await fsPromises.rm(args[0]);
        } else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "rm":
        if (args.length === 1) await fsPromises.rm(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case "hash":
        if (args.length === 1) await hash(...args);
        else return console.log(INVALID_INPUT_MESSAGE);
        break;

      case ".exit":
        rl.close();
        break;
    }
  } catch (error) {
    console.log(OPERATION_ERROR, error.message);
  }
};

export default commandsHandler;
