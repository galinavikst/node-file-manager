import fs from "node:fs";
import crypto from "node:crypto";

const hash = async (filePath) => {
  const rs = fs.createReadStream(filePath);
  const hash = crypto.createHash("sha256");

  rs.pipe(hash); // Pipes the file data into the hash object

  console.log(hash.digest("hex")); // transform to hex
};

export default hash;
