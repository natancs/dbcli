import { describe, test, expect, beforeAll } from "@jest/globals";
import { Database } from "./database";

const DEFAULT_ITEM_CADASTRAR = {
  id: 1,
  nome: "Flash",
  poder: "Speed"
};
const DEFAULT_ITEM_ATUALIZAR = {
  id: 3,
  nome: "Batman",
  poder: "Dinheiro"
};

describe("Hero manipulation suite", () => {
  const database = new Database();

  beforeAll(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
  });

  test("must register a hero, using files", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const result = await database.listar(expected.id);

    expect(result).toEqual(expected);
  });

  test("must register a hero, using files", async () => {
    const expected = { ...DEFAULT_ITEM_CADASTRAR, id: 2 };
    const result = await database.cadastrar(expected);
    const actual = await database.listar(expected.id);

    expect(actual).toEqual(expected);
  });

  test("must remove a hero, using files", async () => {
    const expected = true;
    const result = await database.remover(DEFAULT_ITEM_CADASTRAR.id);

    expect(result).toEqual(expected);
  });

  test("must update a hero, using files", async () => {
    const expected = DEFAULT_ITEM_ATUALIZAR;
    const novoDado = {
      nome: "Batman",
      poder: "Dinheiro"
    };
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
    const result = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);
    expect(result).toEqual(expected);
  });
});
