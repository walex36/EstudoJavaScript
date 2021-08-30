export class ContaCorrente {
    agencia;
    cliente;
    
    _saldo = 0;
    
    sacar(valor) {
        if (this._saldo < valor) {
            console.log("Valor não disponivel!");
            return;
        }
        this._saldo -= valor;
        return valor;
    };

    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor Invalido!");
            return;
        }
        this._saldo += valor;
        return valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}