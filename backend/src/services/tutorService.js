
import * as tutorModel from "../models/tutorModel.js";
import { erro } from "../utils/erro.js";

export function listarTutores() {
  return tutorModel.listar();
}

export function buscarTutor(id) {
  const tutor = tutorModel.buscarPorId(id);

  if (!tutor) {
    throw erro(404, "Tutor não encontrado.");
  }

  return tutor;
}

export function criarTutor(dados) {
  const { nome, telefone, email } = dados;

  if (!nome || !telefone || !email) {
    throw erro(400, "Nome, telefone e e-mail são obrigatórios.");
  }

  const emailExistente = tutorModel.buscarPorEmail(email);

  if (emailExistente) {
    throw erro(409, "Já existe um tutor cadastrado com esse e-mail.");
  }

  return tutorModel.criar({ nome, telefone, email });
}

export function atualizarTutor(id, dados) {
  const tutorAtual = buscarTutor(id);

  const dadosAtualizados = {
    nome: dados.nome ?? tutorAtual.nome,
    telefone: dados.telefone ?? tutorAtual.telefone,
    email: dados.email ?? tutorAtual.email
  };

  if (
    !dadosAtualizados.nome ||
    !dadosAtualizados.telefone ||
    !dadosAtualizados.email
  ) {
    throw erro(400, "Nome, telefone e e-mail são obrigatórios.");
  }

  const emailExistente = tutorModel.buscarPorEmail(dadosAtualizados.email);

  if (emailExistente && emailExistente.id !== id) {
    throw erro(409, "Já existe um tutor cadastrado com esse e-mail.");
  }

  return tutorModel.atualizar(id, dadosAtualizados);
}

export function removerTutor(id) {
  buscarTutor(id);
  tutorModel.remover(id);
}
