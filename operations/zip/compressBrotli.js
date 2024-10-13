import zlib from "node:zlib";
import fs from "node:fs";
import * as fsPromisess from "node:fs/promises";
import { OPERATION_ERROR } from "../../constants.js";

// it is unused function. implemented togleBrotli
const compressBrotli = async (filePath, destPath) => {
  try {
    await fsPromisess.access(filePath);

    const rs = fs.createReadStream(filePath);
    const ws = fs.createWriteStream(destPath);

    rs.pipe(zlib.createBrotliCompress()).pipe(ws);
  } catch (error) {
    console.log(OPERATION_ERROR, error.message);
  }
};

export default compressBrotli;
