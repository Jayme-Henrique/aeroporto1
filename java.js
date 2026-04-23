// Fase 1: Importando a classe do outro arquivo
import Voo from './Voo.js';

const btn = document.getElementById("btnRegistrar");
const mensagemTela = document.getElementById("avisoSistema");

btn.addEventListener("click", () => {
    // Capturando os valores dos inputs
    const codigo = document.getElementById("codigo").value;
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const capacidade = document.getElementById("capacidade").value;

    // Fase 3: Equipe de Resgate (Try / Catch)
    try {
        console.log("Tentando cadastrar voo...");

        // Tentamos criar o objeto. Se os dados forem inválidos, 
        // a classe Voo vai "lançar" (throw) um erro.
        const novoVoo = new Voo(codigo, origem, destino, capacidade);

        // Se chegar aqui, significa que não houve erro!
        mensagemTela.innerText = `✅ Sucesso: Voo ${novoVoo.codigo} registrado para ${novoVoo.destino}!`;
        mensagemTela.style.color = "green";
        
        console.table(novoVoo);

    } catch (erro) {
        // Se qualquer erro ocorrer no bloco TRY, o CATCH "captura" o objeto de erro
        console.error("Falha no sistema de cadastro registrada.");
        
        // Exibimos a mensagem customizada que definimos no throw lá no Voo.js
        mensagemTela.innerText = "🚨 " + erro.message;
        mensagemTela.style.color = "red";

    } finally {
        // Sempre executa, independente de erro ou sucesso
        console.log("Processo de registro finalizado.");
    }
});