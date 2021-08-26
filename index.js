class Cliente {
    nome;
    cpf;
    ContaCorrente;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }else{
            console.log("Valor não disponivel!");
        }
    };
}


const cliente1 = new Cliente();
cliente1.nome = "Carlos";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11199988876;

const contaCorrenteCarlos = new ContaCorrente();
contaCorrenteCarlos.saldo = 0;
contaCorrenteCarlos.agencia = 1001;

console.log(contaCorrenteCarlos.saldo);
contaCorrenteCarlos.saldo += 100;
console.log(contaCorrenteCarlos.saldo);
contaCorrenteCarlos.sacar(500);
console.log(contaCorrenteCarlos.saldo);


console.log(contaCorrenteCarlos.saldo);





console.log(cliente2);
console.log(cliente2);