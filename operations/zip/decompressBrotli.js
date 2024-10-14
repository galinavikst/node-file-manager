import fs from "node:fs";
import * as fsPromises from "node:fs/promises";
import zlib from "node:zlib";
import { OPERATION_ERROR } from "../../constants.js";

// it is unused function. implemented togleBrotli
const decompressBrotli = async (compressedFilePath, destPath) => {
  try {
    await fsPromises.access(compressedFilePath);

    const rs = fs.createReadStream(compressedFilePath);
    const ws = fs.createWriteStream(destPath);

    rs.pipe(zlib.createBrotliDecompress()).pipe(ws);
  } catch (error) {
    console.log(OPERATION_ERROR, error.message);
  }
};

export default decompressBrotli;
