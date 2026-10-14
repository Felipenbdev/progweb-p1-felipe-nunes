// s1/main.js — v4
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const contas = [
  new ContaCorrente('0001', 'Ana Lima'),
  new ContaPoupanca('0002', 'Bruno Souza')
];

for (const conta of contas) {
  conta.depositar(1000);
}

function fecharMes(contas) {
  for (const conta of contas) {
    const tarifa = conta.tarifaMensal();
    if (tarifa > 0) conta.sacar(tarifa);
    console.log(`${conta.toString()} (tarifa: R$ ${tarifa.toFixed(2)})`);
  }
}

fecharMes(contas);

try {
  new Conta('0003', 'Carla Dias');
} catch (e) {
  console.log(`Erro esperado → ${e.message}`);
}