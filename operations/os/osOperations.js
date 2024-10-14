import os from "node:os";
import path from "node:path";
import process from "node:process";

const osOperations = (arg) => {
  switch (arg) {
    case "--eol": // default system End-Of-Line
      console.log(os.EOL); // \r\n on Windows
      break;

    case "--cpus":
      // overall amount of CPUS
      const totalCores = os.availableParallelism();
      console.log("amount: ", totalCores);

      const cpuArr = os.cpus();
      // model and clock rate (in GHz) for each of them
      for (const cpu of cpuArr) {
        const clockRateGHz = (cpu.speed / 1000).toFixed(2); // Convert MHz to GHz
        console.log(
          "model=>",
          cpu.model,
          os.EOL,
          "clock rate=>",
          clockRateGHz,
          " GHz"
        );
      }
      break;

    case "--homedir":
      console.log(os.homedir());
      break;

    case "--username":
      // console.log(path.basename(os.homedir()));  // this name or ?
      console.log(os.hostname()); // system user name,
      break;

    case "--architecture":
      console.log(os.arch());
      // or
      // console.log(process.arch);
      break;
  }
};

export default osOperations;
