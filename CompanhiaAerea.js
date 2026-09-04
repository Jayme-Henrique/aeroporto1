class CompanhiaAerea {

    constructor(nome, sigla) {
        this.nome = nome;
        this.sigla = sigla;
        
     
        this.frota = [];
    }

    comprarAviao(novoAviao) {
        this.frota.push(novoAviao);
        console.log(this.nome + " agora tem um " + novoAviao.modelo);
    }
}

export default CompanhiaAerea;