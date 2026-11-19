
export function erro(status, mensagem) {
  const err = new Error(mensagem);
  err.status = status;
  return err;
}
