const fs = require('fs').promises;

// SALVAR dados
async function salvarMetas() {
    try {
        await fs.writeFile('metas.json', JSON.stringify(metas, null, 2));
        console.log("💾 Dados salvos!");
    } catch (erro) {
        console.log("❌ Erro ao salvar:", erro.message);
    }
}

// CARREGAR dados
async function carregarMetas() {
    try {
        const dados = await fs.readFile('metas.json', 'utf-8');
        metas = JSON.parse(dados);
    } catch (erro) {
        metas = []; // Se não existe, começar vazio
    }
}




