import fs from "node:fs/promises";
import path from "node:path";
import { OPERATION_ERROR } from "../../constants.js";

const rn = async (oldFilePath, newName) => {
  try {
    // paths depend of process.cwd()
    const parentDir = path.dirname(oldFilePath);
    const newFilePath = path.join(parentDir, newName);

    console.log(parentDir, newFilePath);
    await fs.rename(oldFilePath, newFilePath);
  } catch (error) {
    console.log(OPERATION_ERROR);
  }
};

export default rn;
