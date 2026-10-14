// s1/Conta.js — v4: polimorfismo
export class Conta {
  #saldo = 0;
  #titular;

  constructor(numero, titular) {
    if (new.target === Conta) {
      throw new Error('Conta é abstrata e não pode ser instanciada.');
    }
    this.numero = numero;
    this.#titular = titular;
  }

  get saldo() {
    return this.#saldo;
  }

  get titular() {
    return this.#titular;
  }

  set titular(nome) {
    if (nome.trim().length < 3) {
      throw new Error('Nome deve ter ao menos 3 caracteres.');
    }
    this.#titular = nome;
  }

  depositar(valor) {
    if (valor <= 0) throw new Error('Valor deve ser positivo.');
    this.#saldo += valor;
  }

  saldoDisponivel() {
    return this.#saldo;
  }

  sacar(valor) {
    if (valor <= 0) throw new Error('Valor deve ser positivo.');
    if (valor > this.saldoDisponivel()) {
      throw new Error('Saldo insuficiente.');
    }
    this.#saldo -= valor;
  }

  tarifaMensal() {
    throw new Error('Conta é abstrata: crie ContaCorrente ou ContaPoupanca');
  }

  toString() {
    return `${this.constructor.name} ${this.numero} — ${this.titular} — ${this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  }
}