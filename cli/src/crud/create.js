import { Database } from "../database.js";
import { Heroi } from "../heroi.js";

const database = new Database();

export async function create(_, options) {
  const hero = new Heroi(options._optionValues);
  const resultado = await database.cadastrar(hero);

  if (!resultado) {
    throw Error("Hroi não foi cadastrado");
  }

  console.log("Heroi Cadastrado com sucesso.");
}
