
export class StorageService {
    static CHAVE_FROTA = "frota";

    static obterFrota() {
        return JSON.parse(localStorage.getItem(this.CHAVE_FROTA)) || [];
    }

    static salvarVoo(voo) {
        const frota = this.obterFrota();
        frota.push(voo);
        localStorage.setItem(this.CHAVE_FROTA, JSON.stringify(frota));
        console.log("Voo salvo com sucesso no LocalStorage.");
    }
}