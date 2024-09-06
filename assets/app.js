function pesquisaAtletas() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // console.log(section); // Outra linha para depuração
  
    let searchField = document.getElementById("searchField").value;

    if (!searchField) {
        section.innerHTML = "<p>Você precisa digitar o nome de um atleta ou esporte.</p>"
        return 
    }

    console.log(searchField);
    // Inicializa uma string para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let link = "";
    let tags = "";
    
    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        link = dado.link.toLowerCase();
        tags = dado.tags.toLowerCase().split(" ");
        if(titulo.includes(searchField)||descricao.includes(searchField)||link.includes(searchField)){
        // Constrói o HTML para cada resultado da pesquisa
        resultados += `
          <div id="results"></div> <div class="item-resultado">
            <h2>
              <a href="#">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
        }
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }