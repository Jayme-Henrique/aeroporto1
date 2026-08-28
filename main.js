import Voo from './Voo.js';
import { StorageService } from './StorageService.js';
import { PainelView } from './PainelView.js';
    
const painelView = new PainelView("telaPainel");

painelView.renderizar(StorageService.obterFrota());

document.getElementById("btnCadastrar").addEventListener("click", () => {
    const inputCod = document.getElementById("inputCod");
    const inputDest = document.getElementById("inputDest");

    if (!inputCod.value || !inputDest.value) return;

    const novoVoo = new Voo(inputCod.value, inputDest.value);

    StorageService.salvarVoo(novoVoo);

    painelView.renderizar(StorageService.obterFrota());
    painelView.limparFormulario("inputCod", "inputDest");
});