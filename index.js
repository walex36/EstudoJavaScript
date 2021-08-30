class Cliente {
    nome;
    cpf;
    ContaCorrente;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        }else{
            console.log("Valor não disponivel!");
        }
    };

    depositar(valor){
        if (valor > 0) {
            this.#saldo += valor;
        }else{
            console.log("Valor Invalido!");
        }
    }
}


const cliente1 = new Cliente();
cliente1.nome = "Carlos";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11199988876;

const contaCorrenteCarlos = new ContaCorrente();
contaCorrenteCarlos.agencia = 1001;

//console.log(contaCorrenteCarlos.#saldo);
contaCorrenteCarlos.depositar(100);
//console.log(contaCorrenteCarlos.#saldo);
contaCorrenteCarlos.depositar(300);
//console.log(contaCorrenteCarlos.#saldo);
contaCorrenteCarlos.depositar(-10);

//console.log(contaCorrenteCarlos.saldo);





console.log(cliente1);
console.log(cliente2);