// Arquivo: src/MODELS/Passageiro.js

/**
 * Classe que representa um Passageiro físico dentro do aeroporto.
 * Ela guarda as informações pessoais e o status do cliente.
 */
class Passageiro {
    
    /**
     * O método construtor é chamado quando um novo passageiro chega ao aeroporto.
     * @param {string} nome - O nome completo do passageiro.
     * @param {string} cpf - O documento de identificação único.
     * @param {string} dataNascimento - A data de nascimento para validar maioridade/descontos.
     */
    constructor(nome, cpf, dataNascimento) {
        // Atributos de identificação
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        
        // Atributo de estado: Todo passageiro começa fora da área de embarque
        this.estaNoEmbarque = false; 
    }

    /**
     * Método responsável por simular a passagem do cliente pela catraca de segurança.
     * Ação: Muda o status do passageiro para indicar que ele está pronto para voar.
     */
    realizarCheckInSeguranca() {
        this.estaNoEmbarque = true;
        console.log(`Passageiro ${this.nome} passou pelo Raio-X e está na área de embarque.`);
    }

    /**
     * Método para atualizar os dados do passageiro caso haja erro de digitação.
     * @param {string} novoNome - O nome corrigido.
     */
    corrigirNome(novoNome) {
        this.nome = novoNome;
        console.log(`Nome atualizado para: ${this.nome}`);
    }
}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default Passageiro;
