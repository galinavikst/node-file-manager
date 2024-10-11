import fs from "node:fs/promises";
import path from "node:path";
import { OPERATION_ERROR } from "../constants.js";

const cat = async (pathArg) => {
  try {
    const filePath = path.resolve(pathArg);
    const data = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(OPERATION_ERROR, err.message);
  }
};

export default cat;
