// FASE 1: Começando simples
console.log("=== SISTEMA DE METAS ===");
console.log("Bem-vindo ao seu gerenciador de metas!");

// Array para armazenar metas
let metas = [];

// Função para adicionar meta (versão simples)
function adicionarMeta() {
    let novaMeta = "Estudar JavaScript"; // 🐛 Sempre igual!
    metas.push(novaMeta);
    console.log("Meta adicionada:", novaMeta);
    console.log("Total de metas:", metas.length);
}

adicionarMeta();
console.log("Todas as metas:", metas);



