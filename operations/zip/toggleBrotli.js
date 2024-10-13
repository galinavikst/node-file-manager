import zlib from "node:zlib";
import fs from "node:fs";
import * as fsPromisess from "node:fs/promises";
import { OPERATION_ERROR } from "../../constants.js";

const toggleBrotli = async (filePath, destPath, command) => {
  try {
    await fsPromisess.access(filePath);

    const method =
      command === "compress"
        ? "createBrotliCompress"
        : "createBrotliDecompress";

    const rs = fs.createReadStream(filePath);
    const ws = fs.createWriteStream(destPath);

    rs.pipe(zlib[method]()).pipe(ws);
  } catch (error) {
    console.log(OPERATION_ERROR, error.message);
  }
};

export default toggleBrotli;
