import fs from "node:fs/promises";
import process from "node:process";
import { OPERATION_ERROR } from "../constants.js";

const ls = async () => {
  try {
    const content = await fs.readdir(process.cwd());
    const resArr = [];

    for (const el of content) {
      const stat = await fs.lstat(el);
      resArr.push({
        name: el,
        type: stat.isFile() ? "file" : "directory",
      });
    }

    const sortedArr = resArr.sort((a, b) => {
      // sort by name alphabetically the same type
      if (a.type === b.type) return a.name - b.name;
      // directories should come before files
      return a.type === "directory" ? -1 : 1;
    });

    console.table(sortedArr);

    /// SIMPLER way for my opinion
    //   let dirs = [];
    // let files = [];
    // for (const item of content) {
    //   const stat = await fs.lstat(item);

    //   if (stat.isFile()) files.push(item);
    //   else dirs.push(item);
    // }

    // const sortedDirs = dirs.sort();
    // const sortedFiles = files.sort();

    // const dirsFirstArr = [...sortedDirs, ...sortedFiles];
    // console.table(dirsFirstArr);
  } catch (err) {
    console.log(OPERATION_ERROR, err.message);
  }
};

export default ls;
