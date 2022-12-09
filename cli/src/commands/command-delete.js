import { del } from "../crud/delete.js";

export function commandDelete(program) {
  program
    .command("delete")
    .description("Delete database or hero by id")
    .option("-i, --id <value>", "hero id")
    .action(del);

  return;
}
