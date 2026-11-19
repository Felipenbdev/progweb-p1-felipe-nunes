
import * as tutorService from "../services/tutorService.js";

export function listar(req, res) {
  const tutores = tutorService.listarTutores();
  res.status(200).json(tutores);
}

export function buscar(req, res) {
  const id = Number(req.params.id);
  const tutor = tutorService.buscarTutor(id);

  res.status(200).json(tutor);
}

export function criar(req, res) {
  const tutor = tutorService.criarTutor(req.body);

  res.status(201).json(tutor);
}

export function atualizar(req, res) {
  const id = Number(req.params.id);
  const tutor = tutorService.atualizarTutor(id, req.body);

  res.status(200).json(tutor);
}

export function remover(req, res) {
  const id = Number(req.params.id);

  tutorService.removerTutor(id);
  res.status(204).end();
}
