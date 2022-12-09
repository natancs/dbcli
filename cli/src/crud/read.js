import { Database } from "../database.js";
import { Heroi } from "../heroi.js";

const database = new Database();

export async function read(_, options) {
  const hero = new Heroi(options._optionValues);

  if (hero.id === undefined) {
    const resultado = await database.listar();

    console.log(resultado);
    return;
  }
  const id = hero.id.includes("-") ? hero.id : parseInt(hero.id);
  const resultado = await database.listar(id);
  console.log(resultado);
  return;
}
