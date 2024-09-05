console.log(dados);

// async function searchAthletes() {
//     const query = document.getElementById('searchField').value;
    
//     const apiUrl = `https://apis.codante.io/olympic-games/competitors?name=${query}&country=BRA`;

//     try {
//         const response = await fetch(apiUrl, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//                 // 'Authorization': 'Bearer SEU_TOKEN_DE_API_AQUI'
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Erro ao buscar dados');
//         }

//         const data = await response.json();

//         displayResults(data.data);
//     } catch (error) {
//         console.error('Erro:', error);
//         document.getElementById('results').innerText = 'Erro ao buscar os atletas. Tente novamente.';
//     }
// }

// function displayResults(athletes) {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = ''; 

//     if (athletes.length === 0) {
//         resultsDiv.innerText = 'Nenhum atleta encontrado.';
//         return;
//     }

//     athletes.forEach(athlete => {
//         const athleteDiv = document.createElement('div');
//         athleteDiv.innerHTML = `
//             <p><strong>Nome:</strong> ${athlete.name}</p>
//             <p><strong>País:</strong> ${athlete.country}</p>
//             <p><strong>Esporte:</strong> ${athlete.sport}</p>
//             <hr>
//         `;
//         resultsDiv.appendChild(athleteDiv);
//     });
// }