
import * as clienteService from "../services/clienteService.js";

export function listar(req, res) {
  res.json(clienteService.listarClientes());
}

export function buscarPorId(req, res) {
  const id = Number(req.params.id);
  res.json(clienteService.buscarCliente(id));
}

export function criar(req, res) {
  const cliente = clienteService.criarCliente(req.body);
  res.status(201).json(cliente);
}

export function atualizar(req, res) {
  const id = Number(req.params.id);
  const cliente = clienteService.atualizarCliente(id, req.body);
  res.json(cliente);
}

export function remover(req, res) {
  const id = Number(req.params.id);
  clienteService.removerCliente(id);
  res.status(204).end();
}
