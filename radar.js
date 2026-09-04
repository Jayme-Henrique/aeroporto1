// SISTEMA DE RADAR OOP - CORRIGIDO
class Voo {
    #status; // Propriedade privada

    constructor(codigo, destino) {
        this.codigo = codigo;
        this.destino = destino;
        this.#status = "Aguardando Leitura do Radar";
    }

    // Getter para permitir a leitura externa do status privado
    get status() { 
        return this.#status; 
    }

    // Regra de negócio encapsulada: a classe decide seu próprio estado
    avaliarCondicoesClimaticas(velocidadeDoVento) {
        if (velocidadeDoVento > 80) {
            this.#status = "CANCELADO - Risco de Ciclone";
        } else {
            this.#status = "Liberado para Decolagem";
        }
    }
}

// ---------------------------------------------------------
// SIMULAÇÃO DO SISTEMA PRINCIPAL (CORRIGIDO)
// ---------------------------------------------------------

// Dados crus que chegam da API (JSON)
const dadosDaApi = [
    { id_voo: "G3-111", cidade: "Curitiba", vento_kmh: 90 },
    { id_voo: "LA-222", cidade: "São Paulo", vento_kmh: 40 }
];

console.log("Processando dados do Radar...\n");

// CORREÇÃO 1: Mapeamos o JSON cru transformando cada item em uma Instância Real de Voo
const listaDeVoos = dadosDaApi.map(dado => new Voo(dado.id_voo, dado.cidade));

for (let i = 0; i < listaDeVoos.length; i++) {
    let vooAtual = listaDeVoos[i];
    let dadosRadar = dadosDaApi[i]; // Pegamos o vento correspondente ao voo
    
    // CORREÇÃO 2: Quem decide o status é o próprio objeto Voo. Encapsulamento respeitado!
    vooAtual.avaliarCondicoesClimaticas(dadosRadar.vento_kmh);

    // Exibimos o resultado acessando as propriedades da instância (incluindo o getter)
    console.log(`Voo ${vooAtual.codigo} para ${vooAtual.destino} | Status: ${vooAtual.status}`);
}