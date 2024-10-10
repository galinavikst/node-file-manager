export const EXIT_MESSAGE = (name) =>
  `Thank you for using File Manager, ${name || "Username"}, goodbye!`;

export const WELLCOME_MESSAGE = (name) =>
  `Welcome to the File Manager, ${name || "Username"}!`;

export const OPERATION_ERROR = "Operation failed";
export const INVALID_INPUT_MESSAGE = "Invalid input";

export const OPERATIONS = [
  "up",
  "ls",
  "cd",
  "cat",
  "add",
  "rn",
  "cp",
  "mv",
  "rm",
  "os",
  // "os --EOL",
  // "os --cpus",
  // "os --homedir",
  // "os --username",
  // "os --architecture",
  "hash",
  "compress",
  "decompress",
  ".exit",
];
