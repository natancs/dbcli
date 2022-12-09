import { update } from "../crud/update.js";

export function commandUpdate(program) {
  program
    .command("update")
    .description("Update hero by id")
    .option("-i, --id <value>", "hero id")
    .option("-n, --name <string>", "hero name")
    .option("-p, --power <string>", "hero power")
    .action(update);

  return;
}
