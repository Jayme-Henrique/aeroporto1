// Classe Mãe (Base)
class Voo {
    constructor(codigo, origem, destino) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.status = "No Pátio";
        this.altitude = 0;
    }

    decolar() {
        this.status = "Em Voo";
        this.altitude = 10000;
        return `Voo ${this.codigo} decolou!`;
    }

    pousar() {
        this.status = "Pousado";
        this.altitude = 0;
        return `Voo ${this.codigo} pousou com segurança.`;
    }

    comunicarTorre() {
        return `Torre, aqui é o voo ${this.codigo} solicitando instruções.`;
    }
}

// SUBCLASSE 1: Jato Executivo (Herança)
class JatoExecutivo extends Voo {
    constructor(codigo, origem, destino) {
        super(codigo, origem, destino); 
        this.modoSupersonico = false;
    }

    ativarSupersonico() {
        if (this.status === "Em Voo") {
            this.modoSupersonico = true;
            this.altitude = 50000; 
            return "💥 BOOM! Barreira do som quebrada. Modo Supersônico Ativado!";
        }
        return "Erro: O jato precisa estar em voo para ativar o supersônico.";
    }

    desativarSupersonico() {
        this.modoSupersonico = false;
        this.altitude = 10000;
        return "Modo Supersônico Desativado. Velocidade normalizada.";
    }

    comunicarTorre() {
        return `Torre, voo VIP ${this.codigo} na escuta, prioridade de pouso!`;
    }
}

// SUBCLASSE 2: Voo de Carga (Herança)
class VooCarga extends Voo {
    constructor(codigo, origem, destino, capacidadeMaxima) {
        super(codigo, origem, destino);
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtual = 0;
    }

    embarcarCarga(toneladas) {
        if (this.cargaAtual + toneladas <= this.capacidadeMaxima) {
            this.cargaAtual += toneladas;
            return `Carga de ${toneladas}t embarcada com sucesso!`;
        } else {
            return `ALERTA: Capacidade excedida! Limite: ${this.capacidadeMaxima}t.`;
        }
    }

    comunicarTorre() {
        return `Torre, cargueiro pesado ${this.codigo} se aproximando.`;
    }
}       