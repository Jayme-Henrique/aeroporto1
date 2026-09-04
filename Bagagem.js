
class Bagagem {
   
    constructor(etiqueta, peso, dono) {
        this.etiqueta = etiqueta;
        this.peso = peso;
        this.dono = dono;
        
      
        this.localizacao = "No guichê";
    }

    mudarStatus(novoLocal) {
        this.localizacao = novoLocal;
        console.log("A mala " + this.etiqueta + " agora está em: " + novoLocal);
    }
}

export default Bagagem;