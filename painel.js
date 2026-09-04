import Voo from './Voo.js';

const btnRegistrar = document.getElementById("btnRegistrar");
const mensagemTela = document.getElementById("avisoSistema");

btnRegistrar.addEventListener("click", () => {
    // Coletando dados dos inputs
    const codigo = document.getElementById("inputCod").value.trim();
    const origem = document.getElementById("inputOri").value.trim();
    const destino = document.getElementById("inputDest").value.trim();

    try {
        // Tenta criar a instância da classe
        const novoVoo = new Voo(codigo, origem, destino);

        // Se o construtor acima não lançar 'throw', executamos o sucesso:
        mensagemTela.innerText = `✅ Voo ${novoVoo.codigo} registrado com sucesso para ${novoVoo.destino}!`;
        mensagemTela.style.color = "green";
        
        // Limpa os campos após o sucesso
        document.querySelectorAll("input").forEach(i => i.value = "");

    } catch (erro) {
        // Captura qualquer erro lançado pelo 'throw new Error'
        mensagemTela.innerText = erro.message;
        mensagemTela.style.color = "red";
        console.error("Alerta de Sistema:", erro.message);

    } finally {
        // Executa sempre, independente de erro ou sucesso
        console.log("Processamento de registro finalizado.");
    }
});