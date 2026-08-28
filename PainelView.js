
export class PainelView {
    constructor(idContainer) {
        this.container = document.getElementById(idContainer);
    }

    renderizar(listaVoos) {
        this.container.innerHTML = "";
        listaVoos.forEach(voo => {
            this.container.innerHTML += `<div class="card">✈️ ${voo.codigo} - ${voo.destino}</div>`;
        });
    }

    limparFormulario(idInputCod, idInputDest) {
        document.getElementById(idInputCod).value = "";
        document.getElementById(idInputDest).value = "";
    }
}