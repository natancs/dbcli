import { Database } from "../database.js";
import { Heroi } from "../heroi.js";

const database = new Database();

export async function del(_, options) {
  const hero = new Heroi(options._optionValues);

  if (hero.id === undefined) {
    await database.remover();

    console.log("Base de dados foi apagada!");
    return;
  }
  const id = hero.id.includes("-") ? hero.id : parseInt(hero.id);
  const heroi = await database.listar(id);

  if (typeof heroi !== "object") {
    console.log(heroi);
    return;
  }
  await database.remover(id);
  console.log(`O heroi ${heroi.name} foi removido!`);
  return;
}
