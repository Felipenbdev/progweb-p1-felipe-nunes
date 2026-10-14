// s1/main.js — v3
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cc = new ContaCorrente('0001', 'Ana Lima');
cc.depositar(200);
cc.sacar(500);
console.log('CC — saldo:', cc.saldo);

const cp = new ContaPoupanca('0002', 'Bruno Souza');
cp.depositar(1000);
cp.render();
console.log('Poupança — saldo:', cp.saldo);

try {
  cc.sacar(1000);
} catch (e) {
  console.log('Bloqueado:', e.message);
}

console.log(cc instanceof Conta);
console.log(cp instanceof Conta);
console.log(cc instanceof ContaCorrente);