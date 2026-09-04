


class PortaoEmbarque {
    constructor(numero, voo) {
        this.numero = numero;
        this.voo = voo;
        this.ocupado = false;
    }
    liberarPortao(idVoo) {
        this.vooVinculado = idVoo;
        this.estaAberto = true;
        console.log(`Portão ${this.numero} liberado para o voo ${idVoo}`)
    }

}