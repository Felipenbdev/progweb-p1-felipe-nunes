
import * as petService from "../services/petService.js";

export function listar(req, res) {
  const pets = petService.listarPets();
  res.status(200).json(pets);
}

export function buscar(req, res) {
  const id = Number(req.params.id);
  const pet = petService.buscarPet(id);

  res.status(200).json(pet);
}

export function criar(req, res) {
  const pet = petService.criarPet(req.body);

  res.status(201).json(pet);
}

export function atualizar(req, res) {
  const id = Number(req.params.id);
  const pet = petService.atualizarPet(id, req.body);

  res.status(200).json(pet);
}

export function remover(req, res) {
  const id = Number(req.params.id);

  petService.removerPet(id);
  res.status(204).end();
}
