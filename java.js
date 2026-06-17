
import Voo from './Voo.js';

const btn = document.getElementById("btnRegistrar");
const mensagemTela = document.getElementById("avisoSistema");

btn.addEventListener("click", () => {

    const codigo = document.getElementById("codigo").value;
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const capacidade = document.getElementById("capacidade").value;

    try {
        console.log("Tentando cadastrar voo...");

        const novoVoo = new Voo(codigo, origem, destino, capacidade);

        mensagemTela.innerText = `✅ Sucesso: Voo ${novoVoo.codigo} registrado para ${novoVoo.destino}!`;
        mensagemTela.style.color = "green";
        
        console.table(novoVoo);

    } catch (erro) {

        console.error("Falha no sistema de cadastro registrada.");
        
     
        mensagemTela.innerText = "🚨 " + erro.message;
        mensagemTela.style.color = "red";

    } finally {
    
        console.log("Processo de registro finalizado.");
    }


    class Voo {
    #status;

    constructor(codigo, destino) {
        this.codigo = codigo;
        this.destino = destino;
        this.#status = "Aguardando Leitura do Radar";
    }

    get status() {
        return this.#status;
    }

    avaliarCondicoesClimaticas(velocidadeDoVento) {
        if (velocidadeDoVento > 80) {
            this.#status = "CANCELADO - Risco de Ciclone";
        } else {
            this.#status = "Liberado para Decolagem";
        }
    }
}

const dadosDaApi = [
    { id_voo: "G3-111", cidade: "Curitiba", vento_kmh: 90 },
    { id_voo: "LA-222", cidade: "São Paulo", vento_kmh: 40 }
];

console.log("Processando dados do Radar...");

let listaDeVoos = [];

for (let i = 0; i < dadosDaApi.length; i++) {
    const dado = dadosDaApi[i];

    const voo = new Voo(dado.id_voo, dado.cidade);

    voo.avaliarCondicoesClimaticas(dado.vento_kmh);

    listaDeVoos.push({
        id_voo: dado.id_voo,
        cidade: dado.cidade,
        status: voo.status
    });
}

for (let i = 0; i < listaDeVoos.length; i++) {
    const voo = listaDeVoos[i];
    console.log(`Voo ${voo.id_voo} para ${voo.cidade} | Status: ${voo.status}`);
}
});