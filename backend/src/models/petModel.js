
const pets = [];
let proximoId = 1;

export function listar() {
  return pets;
}

export function buscarPorId(id) {
  return pets.find(pet => pet.id === id);
}

export function buscarPorTutor(tutorId) {
  return pets.filter(pet => pet.tutorId === tutorId);
}

export function criar(dados) {
  const pet = {
    id: proximoId++,
    ...dados
  };

  pets.push(pet);
  return pet;
}

export function atualizar(id, dados) {
  const indice = pets.findIndex(pet => pet.id === id);

  if (indice === -1) {
    return null;
  }

  pets[indice] = {
    ...pets[indice],
    ...dados,
    id
  };

  return pets[indice];
}

export function remover(id) {
  const indice = pets.findIndex(pet => pet.id === id);

  if (indice === -1) {
    return false;
  }

  pets.splice(indice, 1);
  return true;
}
