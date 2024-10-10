export const EXIT_MESSAGE = (name) =>
  `Thank you for using File Manager, ${name || "Username"}, goodbye!`;

export const ERROR_MESSAGE = "Operation failed";

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
  "os --EOL",
  "os --cpus",
  "os --homedir",
  "os --username",
  "os --architecture",
  "hash",
  "compress",
  "decompress",
];
