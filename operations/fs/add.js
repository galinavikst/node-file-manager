import fs from "node:fs/promises";
import { OPERATION_ERROR } from "../../constants.js";

async function add(filePath) {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    console.log(OPERATION_ERROR);
  } catch (err) {
    // file does not exist
    await fs.writeFile(filePath, "");
  }
}
export default add;
