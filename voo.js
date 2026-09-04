class Voo {
    constructor(codigo, origem, destino) {
        // Validação: Campo vazio
        if (!codigo || !origem || !destino) {
            throw new Error("Erro: Todos os campos (Código, Origem e Destino) devem ser preenchidos.");
        }

        // Validação: Rota impossível
        if (origem.toLowerCase() === destino.toLowerCase()) {
            throw new Error(`Operação Negada: O voo ${codigo} não pode decolar e pousar na mesma cidade (${origem}).`);
        }

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
    }
}

// Exporta a classe para ser usada no painel.js
export default Voo;


// --- FASE 2: A CLASSE PROTEGIDA ---
class VooSeguro {
    #codigo;
    #combustivel;

    constructor(codigoPassado) {
        this.#codigo = codigoPassado;
        this.#combustivel = 100; // Começa cheio
    }

    // GETTER: Para ler o combustível com segurança
    get lerCombustivel() {
        return `O tanque do voo ${this.#codigo} está em ${this.#combustivel}%`;
    }

    // SETTER: Para abastecer com regras
    set abastecer(quantidade) {
        if (quantidade < 0) {
            console.error("Erro: Não é possível tirar combustível via abastecimento!");
        } else if (this.#combustivel + quantidade > 100) {
            alert("Erro: O tanque vai transbordar! Limite é 100%.");
            this.#combustivel = 100; // Ajusta para o máximo
        } else {
            this.#combustivel += quantidade;
            console.log(`Abastecimento concluído. Novo nível: ${this.#combustivel}%`);
        }
    }

    // MÉTODO PARA GASTAR: (Desafio da Fase 3)
    gastarCombustivel(quantidade) {
        if (this.#combustivel - quantidade < 0) {
            alert("Atenção: Combustível insuficiente para esta manobra!");
            this.#combustivel = 0;
        } else {
            this.#combustivel -= quantidade;
            console.log(`Voo em curso... Combustível restante: ${this.#combustivel}%`);
        }
    }
}
const meuVoo = new VooSeguro("VIP-001");

// 2. Capturar elementos do HTML
const painelTexto = document.getElementById("painelCombustivel");
const btnGastar = document.getElementById("btnGastar");
const btnAbastecer = document.getElementById("btnAbastecerSeguro");

// Função auxiliar para atualizar a tela
function atualizarTela() {
    // Usamos o GETTER aqui
    painelTexto.innerText = meuVoo.lerCombustivel;
}

// Inicializar a tela
atualizarTela();

// 3. Evento de Gastar (Voar)
btnGastar.addEventListener("click", () => {
    meuVoo.gastarCombustivel(15); // Gasta 15% a cada clique
    atualizarTela();
});

// 4. Evento de Abastecer
btnAbastecer.addEventListener("click", () => {
    // Usamos o SETTER aqui (.abastecer = valor)
    meuVoo.abastecer = 10; 
    atualizarTela();

    class Voo {
    constructor(codigo, companhia, status, passageiros) {
        this.codigo = codigo;
        this.companhia = companhia;
        this.status = status;
        this.passageiros = passageiros;
    }
}

const frotaAtiva = [
    new Voo("G3-111", "Gol", "Confirmado", 150),
    new Voo("LA-222", "Latam", "Atrasado", 200),
    new Voo("AD-333", "Azul", "Atrasado", 120),
    new Voo("AF-444", "AirFrance", "No Solo", 300)
];

console.log("=== RELATÓRIO PROFISSIONAL (REFATORADO) ===");

const codigosAtrasados = frotaAtiva.filter(v => v.status === "Atrasado").map(v => v.codigo);
console.log("Voos Atrasados:", codigosAtrasados);

const totalPassageiros = frotaAtiva.reduce((acumulador, v) => acumulador + v.passageiros, 0);
console.log("Total de Passageiros voando:", totalPassageiros);
});

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
// 1. Criando um Voo completo
let vooOriginal = new Voo("G3-777", "Curitiba");
console.log("Teste antes de salvar:");
vooOriginal.decolar(); // Funciona!

// Salvando no LocalStorage
localStorage.setItem("meuLogbook", JSON.stringify(vooOriginal));
console.log("Voo salvo com sucesso no LocalStorage!");


console.log("\n=== LENDO O VOO NO DIA SEGUINTE ===");
// 2. Lendo do disco (retorna apenas um objeto de dados "seco")
let dadosDoDisco = localStorage.getItem("meuLogbook");
let vooRecuperado = JSON.parse(dadosDoDisco);

console.log("Dados crus recuperados do disco:", vooRecuperado);

// 3. RE-HIDRATAÇÃO (A CURA DO ERRO!)
// Criamos uma nova instância da classe Voo usando a "planta" original:
let vooHidratado = new Voo(vooRecuperado.codigo, vooRecuperado.origem);

// Restauramos outros atributos que podiam estar salvos
vooHidratado.status = vooRecuperado.status;

// 4. AGORA SIM! O objeto está "vivo" novamente com seus métodos
console.log("Tentando decolar o voo re-hidratado...");
vooHidratado.decolar(); // Sucesso! 🛫