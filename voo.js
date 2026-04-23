// Fase 1: Definindo a classe e exportando-a
class Voo {
    constructor(codigo, origem, destino, capacidade) {
        // Fase 2: Lançando erros (Throw)
        if (codigo === "") {
            throw new Error("Erro de Segurança: Todo voo precisa de um código.");
        }
        
        if (origem === destino) {
            throw new Error(`Operação Negada: O voo ${codigo} não pode ter a origem igual ao destino!`);
        }

        if (capacidade < 0) {
            throw new Error("Erro de Logística: A capacidade de passageiros não pode ser negativa.");
        }

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.capacidade = capacidade;
    }
}

// Exportando para que outros arquivos possam usar
export default Voo;