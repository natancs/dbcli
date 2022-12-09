import { create } from "../crud/create.js";

export function commandCreate(program) {
  program
    .command("create")
    .description("create a new hero")
    .option("-n, --name <string>", "hero name")
    .option("-p, --power <string>", "hero power")
    .action(create);

  return;
}
