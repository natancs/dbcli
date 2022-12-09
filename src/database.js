import { randomUUID } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

export class Database {
  constructor() {
    this.NOME_ARQUIVO = "./cli/src/herois.json";
  }
  async obterDatosArquivo() {
    const arquivo = readFileSync(this.NOME_ARQUIVO, "utf-8");

    return JSON.parse(arquivo.toString());
  }

  async escreverArquivo(dados) {
    writeFileSync(this.NOME_ARQUIVO, JSON.stringify(dados));
    return true;
  }

  async listar(id) {
    const dados = await this.obterDatosArquivo();
    const dadosFiltrados = dados.filter((item) => (id ? item.id === id : true));

    if (id && dadosFiltrados.length === 0) {
      return "Este heroi não existe";
    }

    if (dadosFiltrados.length === 1) {
      return dadosFiltrados[0];
    }

    return dadosFiltrados;
  }

  async cadastrar(heroi) {
    const dados = await this.obterDatosArquivo();
    const id = heroi.id ? heroi.id : randomUUID();

    const userExists = dados.filter((item) => item.id === id);

    if (userExists.length >= 1) {
      return "Este heroi já existe";
    }

    const heroiComId = {
      ...heroi,
      id
    };
    const dadosFinal = [...dados, heroiComId];
    const resultado = await this.escreverArquivo(dadosFinal);

    return resultado;
  }

  async remover(id) {
    if (!id) {
      await this.escreverArquivo([]);
      return;
    }

    const dados = await this.obterDatosArquivo();
    const indice = dados.findIndex((item) => item.id === id);
    if (indice === -1) {
      return "O seu heroi não existe";
    }

    dados.splice(indice, 1);

    return await this.escreverArquivo(dados);
  }

  async atualizar(id, modificacoes) {
    const dados = await this.obterDatosArquivo();
    const indice = dados.findIndex((item) => item.id === id);

    if (indice === -1) {
      return "O heroi informado não existe";
    }

    const atual = dados[indice];
    const objetoAtualizar = {
      ...atual,
      ...modificacoes
    };
    dados.splice(indice, 1);

    return await this.escreverArquivo([...dados, objetoAtualizar]);
  }
}
