import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Carlos", 11122233309);

const contaCorrenteCarlos = new ContaCorrente(1001, cliente1);
const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);

console.log(conta);