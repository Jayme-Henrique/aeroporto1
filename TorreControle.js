class TorreControle {
    
    constructor(aeroporto) {
        this.aeroporto = aeroporto;
        this.climaBom = true;
        this.pistaOcupada = false;
    }

    pedirAutorizacao(aviao) {
        if (this.climaBom && !this.pistaOcupada) {
            console.log("Torre: Voo " + aviao + " autorizado.");
            return true;
        }
        console.log("Torre: Aguarde, decolagem não permitida.");
        return false;
    }
}

export default TorreControle;




