import { Database } from "../database.js";
import { Heroi } from "../heroi.js";

const database = new Database();

export async function update(_, options) {
  const hero = new Heroi(options._optionValues);

  if (hero.id === undefined) {
    console.log("Use -i, --id para informar o id do heroi");
    return;
  }
  const id = hero.id.includes("-") ? hero.id : parseInt(hero.id);
  const heroi = await database.listar(id);

  if (typeof heroi !== "object") {
    console.log(heroi);
    return;
  }

  if (hero.name === undefined || hero.power === undefined) {
    console.log("Use -n, --name para informar o nome do heroi");
    console.log("Use -p, --power para informar o poder do heroi");
    return;
  }

  const heroUpdate = {
    name: hero.name,
    power: hero.power
  };

  await database.atualizar(id, heroUpdate);
  console.log(`O heroi ${heroi.name} foi atualizado para ${heroUpdate.name}!`);
  return;
}
