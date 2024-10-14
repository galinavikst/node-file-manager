import process from "node:process";
import os from "node:os";
import path from "node:path";
import { INVALID_INPUT_MESSAGE } from "../../constants.js";

const up = async () => {
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);
  const root = path.parse(process.cwd()).root;

  // when you are in the root folder this operation shouldn't change working directory
  // if we don't have to change from homeDir then =>
  // if (os.homedir === currentDir)
  if (root === currentDir)
    return console.log(`sorry, you cannot go above ${root}`);

  try {
    process.chdir(parentDir);
  } catch (err) {
    console.log(INVALID_INPUT_MESSAGE, err.message);
  }
};

export default up;
