// FILTER: Filtra elementos que atendem condição
const realizadas = metas.filter(meta => meta.checked);
const pendentes = metas.filter(meta => !meta.checked);

// FIND: Encontra primeiro elemento que atende condição
const meta = metas.find(m => m.value === "Estudar JS");

// MAP: Transforma cada elemento
const descricoes = metas.map(meta => meta.value);

// FOREACH: Executa ação para cada elemento
metas.forEach(meta => console.log(meta.value));

//💡 "Esses métodos são fundamentais!"

