import { read } from "../crud/read.js";

export function commandRead(program) {
  program
    .command("read")
    .description("List all heros or one hero by id")
    .option("-i, --id <value>", "hero id")
    .action(read);

  return;
}
