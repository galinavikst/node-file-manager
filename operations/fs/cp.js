import stream from "node:stream/promises";
import path from "node:path";
import fs from "node:fs";
import * as fsPromises from "node:fs/promises";
import { OPERATION_ERROR } from "../../constants.js";

const cp = async (filePath, newDirectoryPath) => {
  try {
    await fsPromises.access(filePath); // check source existanse first

    const fileName = path.basename(filePath);
    const pathToCopy = path.join(newDirectoryPath, fileName);

    const rs = fs.createReadStream(filePath);
    const ws = fs.createWriteStream(pathToCopy);

    await stream.pipeline(rs, ws);
    // or
    // rs.on("data", (chunk) => {
    //   ws.write(chunk);
    // });
    // rs.on("end", () => ws.end());
    // rs.on("error", (error) => {
    //   ws.end();
    //   console.log(OPERATION_ERROR, error);
    // });

    return true;
  } catch (error) {
    console.log(OPERATION_ERROR, error.message);
  }
};

export default cp;
