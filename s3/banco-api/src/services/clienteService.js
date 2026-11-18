
import * as clienteModel from "../models/clienteModel.js";
import { erro } from "../utils/erro.js";

export function listarClientes() {
  return clienteModel.listar();
}

export function buscarCliente(id) {
  const cliente = clienteModel.buscarPorId(id);

  if (!cliente) {
    throw erro(404, "Cliente não encontrado");
  }

  return cliente;
}

export function criarCliente(dados) {
  if (!dados.nome || !dados.cpf) {
    throw erro(400, "Nome e CPF são obrigatórios");
  }

  const clienteExistente = clienteModel.buscarPorCpf(dados.cpf);

  if (clienteExistente) {
    throw erro(409, "CPF já cadastrado");
  }

  return clienteModel.criar(dados);
}

export function atualizarCliente(id, dados) {
  buscarCliente(id);

  if (!dados.nome || !dados.cpf) {
    throw erro(400, "Nome e CPF são obrigatórios");
  }

  const clienteComCpf = clienteModel.buscarPorCpf(dados.cpf);

  if (clienteComCpf && clienteComCpf.id !== id) {
    throw erro(409, "CPF já cadastrado");
  }

  return clienteModel.atualizar(id, dados);
}

export function removerCliente(id) {
  buscarCliente(id);
  clienteModel.remover(id);
}
