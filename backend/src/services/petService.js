
import * as petModel from "../models/petModel.js";
import * as tutorModel from "../models/tutorModel.js";
import { erro } from "../utils/erro.js";

export function listarPets() {
  return petModel.listar();
}

export function buscarPet(id) {
  const pet = petModel.buscarPorId(id);

  if (!pet) {
    throw erro(404, "Pet não encontrado.");
  }

  return pet;
}

export function criarPet(dados) {
  const { nome, especie, idade, tutorId } = dados;

  if (
    !nome ||
    !especie ||
    idade === undefined ||
    idade === null ||
    tutorId === undefined ||
    tutorId === null
  ) {
    throw erro(400, "Nome, espécie, idade e tutorId são obrigatórios.");
  }

  if (!Number.isInteger(idade) || idade < 0) {
    throw erro(400, "A idade deve ser um número inteiro maior ou igual a zero.");
  }

  const tutor = tutorModel.buscarPorId(Number(tutorId));

  if (!tutor) {
    throw erro(422, "O tutor informado não existe.");
  }

  return petModel.criar({
    nome,
    especie,
    idade,
    tutorId: Number(tutorId)
  });
}

export function atualizarPet(id, dados) {
  const petAtual = buscarPet(id);

  const dadosAtualizados = {
    nome: dados.nome ?? petAtual.nome,
    especie: dados.especie ?? petAtual.especie,
    idade: dados.idade ?? petAtual.idade,
    tutorId: dados.tutorId ?? petAtual.tutorId
  };

  if (
    !dadosAtualizados.nome ||
    !dadosAtualizados.especie ||
    dadosAtualizados.idade === null ||
    dadosAtualizados.idade === undefined ||
    dadosAtualizados.tutorId === null ||
    dadosAtualizados.tutorId === undefined
  ) {
    throw erro(400, "Nome, espécie, idade e tutorId são obrigatórios.");
  }

  if (
    !Number.isInteger(dadosAtualizados.idade) ||
    dadosAtualizados.idade < 0
  ) {
    throw erro(400, "A idade deve ser um número inteiro maior ou igual a zero.");
  }

  const tutor = tutorModel.buscarPorId(Number(dadosAtualizados.tutorId));

  if (!tutor) {
    throw erro(422, "O tutor informado não existe.");
  }

  return petModel.atualizar(id, {
    ...dadosAtualizados,
    tutorId: Number(dadosAtualizados.tutorId)
  });
}

export function removerPet(id) {
  buscarPet(id);
  petModel.remover(id);
}
