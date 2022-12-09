import { Command } from "commander";
import { commandCreate } from "./commands/command-create.js";
import { commandDelete } from "./commands/command-delete.js";
import { commandRead } from "./commands/command-read.js";
import { commandUpdate } from "./commands/command-update.js";

async function main() {
  const program = new Command();

  try {
    program.version("Version 1.0");

    commandCreate(program);
    commandRead(program);
    commandUpdate(program);
    commandDelete(program);

    program.parse(process.argv);
  } catch (error) {
    console.log("DEU RUIM", error);
  }
}

main();
