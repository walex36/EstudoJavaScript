import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Carlos", 11122233309);

const contaCorrenteCarlos = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("Alice", 11199988876);

const conta2 = new ContaCorrente(1002, cliente2);


console.log("|===========================|");
contaCorrenteCarlos.depositar(500, true);
console.log("|===========================|");
contaCorrenteCarlos.transferir(200, conta2);
console.log("|===========================|");

console.log(contaCorrenteCarlos);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);