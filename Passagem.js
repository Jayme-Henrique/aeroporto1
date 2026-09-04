// Arquivo: src/MODELS/Passagem.js

/**
 * Simula uma passagem de aviao.
 * O principal método de viagens longas.
 */
class Passagem {
    
    /**
     * O método construtor é chamado quando um novo avião chega ao aeroporto.
     * @param {string} preco - Preço da passagem.
     * @param {string} numeroVoo - Numero de identificação do voo.
     * @param {string} ID - O número de identificação da passagem.
     */
    constructor(preco, numeroVoo, ID) {
        // Atributos de identificação
        this.preco = preco;
        this.numeroVoo = numeroVoo;
        this.ID = ID;
        
        // Atributo de estado: Todo avião começa em repouso
        this.pago = false; 
    }

    /**
     * Método responsável por simular a passagem.
     * Ação: Muda o status do avião para representar se ele está em voo.
     */
    realizarVerificacaoPagamento() {
        this.pago = true;
        console.log(`A passagem de número ${this.ID} foi paga.`);
    }

    /**
     * Método para verificar se o ID está correto.
     * @param {string} novoID - ID corrigido.
     */
    corrigirID(novoID) {
        this.ID = novoID;
        console.log(`ID corrigido: ${this.ID}`);
    }
}
