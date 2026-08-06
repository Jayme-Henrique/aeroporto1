
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

class Voo {
    constructor(codigo, destino) {
        this.codigo = codigo;
        this.destino = destino;
    }
}

class RadarService {
    async buscarVoosGlobais() {
        console.log("Iniciando busca no satélite...");
        
        let resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!resposta.ok) {
            throw new Error("Erro ao conectar com o servidor da API.");
        }

        let dadosJson = await resposta.json();
        
        let voosRicos = dadosJson.map(dado => new Voo(dado.id, dado.address.city));
        
        return voosRicos;
    }
}


let painelDOM = document.getElementById("telaPainel") || { innerHTML: "" };
let radar = new RadarService();

async function inicializarPainel() {
    try {
 
        painelDOM.innerHTML = "Buscando dados no satélite... 📡 Por favor, aguarde.";
        console.log("UX: Mensagem de Carregamento exibida.");

        let listaPronta = await radar.buscarVoosGlobais();

        let htmlVoos = `<h3>Sucesso! Temos ${listaPronta.length} voos no radar:</h3><ul>`;
        listaPronta.forEach(voo => {
            htmlVoos += `<li>✈️ Voo Nº ${voo.codigo} -> Destino: ${voo.destino}</li>`;
        });
        htmlVoos += `</ul>`;
        
        painelDOM.innerHTML = htmlVoos;

    } catch (erro) {

        console.error("Detalhes do erro:", erro.message);
        painelDOM.innerHTML = "<b style='color: red;'>Falha de Conexão com o Satélite! ❌ Tente novamente mais tarde.</b>";

    } finally {
        console.log("Requisição finalizada. Limpando processos de loading secundários.");
    }
}

inicializarPainel();
async function iniciarRadar() {
    console.log("Conectando ao satélite global de forma segura...");
    let painel = document.getElementById("telaPainel");
    painel.innerHTML = "";

    // Factory + Polimorfismo
    let voosProcessados = dadosDaAPI.map(dado => {
        if (dado.tipo === "comercial") {
            return new VooComercial(dado.id, dado.qtd);
        } else if (dado.tipo === "carga") {
            return new VooCarga(dado.id, dado.qtd);
        } else {
            return new Voo(dado.id); // fallback
        }
    });

    voosProcessados.forEach(voo => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${voo.gerarRelatorio()}</h3>`;
        painel.appendChild(div);
    });
}
/* 
=========================================================
RELATÓRIO DE AUDITORIA (SERIALIZAÇÃO E RE-HIDRATAÇÃO)
Auditores: [Seu Nome] e [Nome do Seu Dupla]

1. Por que o formato JSON (JSON.stringify) não consegue salvar "métodos" (funções) de uma classe, salvando apenas os "atributos" (dados textuais)?
R: O JSON (JavaScript Object Notation) foi projetado para ser um formato leve de troca de DADOS, não de comportamento. Como funções contêm código executável (lógica) que pode depender do ambiente da memória, o JSON as ignora intencionalmente por motivos de padronização e segurança, salvando apenas valores puros (strings, números, arrays, booleanos e objetos simples).

2. O que o JavaScript perde na memória quando converte um Objeto para JSON? (Explique o que é o Prototype).
R: Ao converter para JSON, o objeto perde a ligação com o seu "Prototype" (Protótipo). No JavaScript, o Prototype é a "planta" original da classe que armazena os métodos (como a função decolar()). Quando fazemos JSON.parse(), recebemos apenas um Objeto Literal (POJO - Plain Old JavaScript Object) desconectado da classe Voo, sem acesso à sua cadeia de protótipos.

3. Defina o que é "Re-hidratar um Objeto". Como nós consertamos o código do Júnior aplicando essa técnica?
R: "Re-hidratar" é o processo de pegar os dados crus/secos (POJO) vindos do JSON e passá-los novamente pelo construtor da Classe utilizando o operador 'new' (ou reconectando seu protótipo). Consertamos o código do Júnior pegando o 'codigo' e 'origem' do JSON recuperado, instanciando um 'new Voo()', e restaurando seus atributos (como 'status'). Com isso, o objeto voltou a ter acesso ao Prototype e ao método decolar().
=========================================================
*/

// SISTEMA DE LOGBOOK (PERSISTÊNCIA) - CORRIGIDO

class Voo {
    constructor(codigo, origem) {
        this.codigo = codigo;
        this.origem = origem;
        this.status = "No Solo";
    }

    decolar() {
        this.status = "Em Voo";
        console.log(`🛫 O voo ${this.codigo} acabou de decolar de ${this.origem}!`);
    }
}

console.log("=== SALVANDO O VOO NO DISCO ===");

let vooOriginal = new Voo("G3-777", "Curitiba");
console.log("Teste antes de salvar:");
vooOriginal.decolar(); 

localStorage.setItem("meuLogbook", JSON.stringify(vooOriginal));
console.log("Voo salvo com sucesso no LocalStorage!");


console.log("\n=== LENDO O VOO NO DIA SEGUINTE ===");

let dadosDoDisco = localStorage.getItem("meuLogbook");
let vooRecuperado = JSON.parse(dadosDoDisco);

console.log("Dados crus recuperados do disco:", vooRecuperado);

let vooHidratado = new Voo(vooRecuperado.codigo, vooRecuperado.origem);

vooHidratado.status = vooRecuperado.status;

console.log("Tentando decolar o voo re-hidratado...");
vooHidratado.decolar(); 