/**
 * Classe focada nas especificações técnicas da máquina (avião).
 */
class Aeronave {
    /**
     * @param {string} prefixo - A "identidade" da aeronave (ex: PR-GUO).
     * @param {string} modelo - O tipo do avião (ex: Boeing 737).
     * @param {number} capacidade - Total de assentos disponíveis.
     */
    constructor(prefixo, modelo, capacidade) {
        this.prefixo = prefixo;
        this.modelo = modelo;
        this.capacidade = capacidade;
        
        // Controle de segurança da máquina
        this.emManutencao = false;
        this.combustivelOk = true;
    }

    /**
     * Simula a inspeção técnica antes do voo.
     */
    checarSeguranca() {
        if (!this.emManutencao && this.combustivelOk) {
            console.log(`Aeronave ${this.prefixo} está em perfeitas condições.`);
            return true;
        }
        return false;
    }
}

export default Aeronave;


