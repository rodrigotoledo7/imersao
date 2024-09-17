const form = document.querySelector('form');
const input = document.getElementById('busca');
const resultadosDiv = document.getElementById('resultados');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const busca = input.value.toLowerCase(); // Converter para minúsculo para facilitar a comparação

    // Simulação de uma busca em uma base de dados (substitua por sua lógica real)
    const atletas = [
        // ... dados dos atletas com informações completas ...
    ];

    const resultadosFiltrados = atletas.filter(atleta => {
        return atleta.nome.toLowerCase().includes(busca) && 
               atleta.pais === 'Brasil' && 
               atleta.olimpiada === 2024 &&
               atleta.medalha !== 'Nenhuma';
    });

    // Criar uma tabela para exibir os resultados
    const tabela = document.createElement('table');
    const thead = tabela.createTHead();
    const tbody = tabela.createTBody();
    // ... criar cabeçalho da tabela ...

    resultadosFiltrados.forEach(atleta => {
        const row = tbody.insertRow();
        // ... criar células da tabela com as informações do atleta ...
    });

    resultadosDiv.appendChild(tabela);
});