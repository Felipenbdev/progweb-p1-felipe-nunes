
const tutores = [];
let proximoId = 1;

export function listar() {
  return tutores;
}

export function buscarPorId(id) {
  return tutores.find(tutor => tutor.id === id);
}

export function buscarPorEmail(email) {
  return tutores.find(tutor => tutor.email === email);
}

export function criar(dados) {
  const tutor = {
    id: proximoId++,
    ...dados
  };

  tutores.push(tutor);
  return tutor;
}

export function atualizar(id, dados) {
  const indice = tutores.findIndex(tutor => tutor.id === id);

  if (indice === -1) {
    return null;
  }

  tutores[indice] = {
    ...tutores[indice],
    ...dados,
    id
  };

  return tutores[indice];
}

export function remover(id) {
  const indice = tutores.findIndex(tutor => tutor.id === id);

  if (indice === -1) {
    return false;
  }

  tutores.splice(indice, 1);
  return true;
}
