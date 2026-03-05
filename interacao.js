// Instanciando os objetos
const meuJato = new JatoExecutivo("VIP777", "São Paulo", "Paris");
const meuCargueiro = new VooCarga("CARGO10", "Manaus", "Miami", 50);

function atualizarTelas() {
    // Atualiza Jato
    document.getElementById('info-jato').innerHTML = `
        Código: ${meuJato.codigo} | Status: ${meuJato.status}<br>
        Altitude: ${meuJato.altitude} ft | Supersônico: ${meuJato.modoSupersonico ? "SIM" : "NÃO"}
    `;

    // Atualiza Cargueiro
    document.getElementById('info-carga').innerHTML = `
        Código: ${meuCargueiro.codigo} | Status: ${meuCargueiro.status}<br>
        Carga: ${meuCargueiro.cargaAtual}t / ${meuCargueiro.capacidadeMaxima}t
    `;
}

function log(mensagem) {
    document.getElementById('console-log').innerText = "Log: " + mensagem;
}

// Funções de Controle
function controlarJato(acao) {
    if (acao === 'decolar') log(meuJato.decolar());
    if (acao === 'pousar') log(meuJato.pousar());
    if (acao === 'ativar') log(meuJato.ativarSupersonico());
    if (acao === 'desativar') log(meuJato.desativarSupersonico());
    if (acao === 'radio') log(meuJato.comunicarTorre());
    atualizarTelas();
}

function controlarCarga(acao) {
    if (acao === 'decolar') log(meuCargueiro.decolar());
    if (acao === 'pousar') log(meuCargueiro.pousar());
    if (acao === 'radio') log(meuCargueiro.comunicarTorre());
    if (acao === 'embarcar') {
        const peso = parseFloat(document.getElementById('input-carga').value);
        log(meuCargueiro.embarcarCarga(peso));
    }
    atualizarTelas();
}

// Inicia a tela
atualizarTelas();