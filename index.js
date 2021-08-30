import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Carlos";
cliente1.cpf = 11122233309;

const contaCorrenteCarlos = new ContaCorrente();
contaCorrenteCarlos.agencia = 1001;
contaCorrenteCarlos.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.agencia = 1002;
conta2.cliente.nome = "Alice";
conta2.cliente.cpf = 11199988876;

contaCorrenteCarlos.depositar(500);

contaCorrenteCarlos.transferir(200, conta2);

console.log(contaCorrenteCarlos);
console.log(conta2);