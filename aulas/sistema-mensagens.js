// SISTEMA DE MENSAGENS ELEGANTE
let mensagemAtual = "Bem-vindo ao App de Metas!";

function definirMensagem(novaMensagem) {
    mensagemAtual = novaMensagem;
}

function mostrarMensagemAtual() {
    if (mensagemAtual) {
        console.log(`\n${mensagemAtual}\n`);
        mensagemAtual = ""; // Limpar após mostrar
    }
}

// USO nas funções
definirMensagem("✅ Meta cadastrada com sucesso!");

