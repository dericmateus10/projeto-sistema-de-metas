const  start = () => {
    let opcao = "sair"
    
    while(true) 
        switch(opcao) {
        case "cadastrar":
            console.log("Cadastrar uma meta")
            break
        case "listar":
            console.log("Listar as metas")
            break
        case "sair":
            return
    }
        
}


start();