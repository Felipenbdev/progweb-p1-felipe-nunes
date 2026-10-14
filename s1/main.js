// s1/main.js — v2
import { Conta } from './Conta.js';

const conta = new Conta('0001', 'Ana Lima');
conta.depositar(100);
conta.sacar(30);

console.log('Saldo:', conta.saldo);
console.log('Titular:', conta.titular);

try {
  conta.saldo = -5000;
} catch (e) {
  console.log('Bloqueado:', e.message);
}

try {
  conta.depositar(-50);
} catch (e) {
  console.log('Bloqueado:', e.message);
}

try {
  conta.sacar(9999);
} catch (e) {
  console.log('Bloqueado:', e.message);
}

try {
  conta.titular = 'Al';
} catch (e) {
  console.log('Bloqueado:', e.message);
}

console.log('Saldo final:', conta.saldo);
console.log('Titular final:', conta.titular);