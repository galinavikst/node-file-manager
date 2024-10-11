import process from "node:process";
import os from "node:os";
import path from "node:path";
import { OPERATION_ERROR } from "../constants.js";

const cd = async (pathArg) => {
  // cd ~ command implementation
  if (pathArg === "~") {
    try {
      process.chdir(os.homedir());
      return;
    } catch (err) {
      console.log(OPERATION_ERROR, err.message);
    }
  }

  const root = path.parse(process.cwd()).root;
  const absolutePath = path.isAbsolute(pathArg)
    ? pathArg
    : path.resolve(process.cwd(), pathArg);
  const normalizedTargetPath = path.normalize(absolutePath);

  //  trying to go above the home directory
  if (!normalizedTargetPath.startsWith(root) || root === normalizedTargetPath) {
    return console.log(`sorry, you cannot go above ${root}`);
  }

  try {
    process.chdir(normalizedTargetPath);
  } catch (err) {
    console.log(OPERATION_ERROR);
  }
};

export default cd;
