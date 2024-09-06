function todos(){
    let section = document.getElementById("resultados-pesquisa");
    
    let resultados = "";
    for(let i = 0; i < sites.length; i++){
        resultados += `
        <div class="item-resultado">
            <h2> ${sites[i].nome} </h2>
            <p class="descricao-meta">${sites[i].descricao}</p>
            <a href="${sites[i].link}" target="_blank">Ver site.</a>
        </div>`
    }
    section.innerHTML = resultados
}


function pesquisar(){
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    let section = document.getElementById("resultados-pesquisa");
    
    let resultados = "";
    let todos = "todos";
    

    if(!campoPesquisa){
        section.innerHTML = `<p>Digite um site de vagas para a pesquisa!</p>`;
        return
    } else {
        for(let i = 0; i < sites.length; i++){
            
            let site = sites[i].nome.toLowerCase();
            let descricaoSite = sites[i].descricao.toLowerCase();

            if(site.includes(campoPesquisa) || descricaoSite.includes(campoPesquisa)){
                resultados += `
                <div class="item-resultado">
                    <h2> ${sites[i].nome} </h2>
                    <p class="descricao-meta">${sites[i].descricao}</p>
                    <a href="${sites[i].link}" target="_blank">Ver site.</a>
                </div>`
            }
        }
    }
    if (!resultados){
        resultados = `<p>Nada foi encontrado!</p>`;
    }
    section.innerHTML = resultados
}



