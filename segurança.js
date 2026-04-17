// Importa ou declara a classe (se estiver em outro arquivo, use import)

class VooSeguro {
    #codigo;
    #combustivel;

    constructor(codigoPassado) {
        this.#codigo = codigoPassado;
        this.#combustivel = 100;
    }

    get lerCombustivel() {
        return `O tanque do voo ${this.#codigo} está em ${this.#combustivel}%`;
    }

    set abastecer(quantidade) {
        if (quantidade < 0) {
            console.log("❌ Erro: Não é possível tirar combustível!");
        } else if (this.#combustivel + quantidade > 100) {
            console.log("❌ Erro: Tanque vai transbordar!");
        } else {
            this.#combustivel += quantidade;
            console.log(`✅ Abastecido! Novo nível: ${this.#combustivel}%`);
        }
    }

    gastar(quantidade) {
        if (quantidade <= 0) return;
        if (this.#combustivel - quantidade < 0) {
            console.log("❌ Combustível insuficiente!");
            this.#combustivel = 0;
        } else {
            this.#combustivel -= quantidade;
            console.log(`✈️ Gasto: -${quantidade}% | Restante: ${this.#combustivel}%`);
        }
    }
}

// Instância do voo
const vooVip = new VooSeguro("VIP-001");

// Elementos do DOM
const painel = document.getElementById("painelCombustivel");
const btnGastar = document.getElementById("btnGastar");
const btnAbastecer = document.getElementById("btnAbastecerSeguro");

// Função para atualizar o painel na tela
function atualizarPainel() {
    painel.innerText = vooVip.lerCombustivel;
}

// Eventos dos botões
btnGastar.addEventListener("click", () => {
    vooVip.gastar(20);        // Gasta 20% por voo
    atualizarPainel();
});

btnAbastecer.addEventListener("click", () => {
    vooVip.abastecer = 10;    // Usa o setter
    atualizarPainel();
});

// Inicializa o painel
atualizarPainel();