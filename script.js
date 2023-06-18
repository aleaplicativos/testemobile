// Função para buscar palavras próximas
function searchWords() {
    const word = document.getElementById('word-input').value;
    const apiUrl = `https://api.dicionario-aberto.net/near/${encodeURIComponent(word)}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.log('Ocorreu um erro:', error));
  }
  
  // Função para exibir os resultados
  function displayResults(words) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
  
    if (words.length === 0) {
      resultsContainer.innerHTML = 'Nenhuma palavra próxima encontrada.';
    } else {
      const list = document.createElement('ul');
      words.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        list.appendChild(listItem);
      });
      resultsContainer.appendChild(list);
    }
  }
  
  // Adiciona um listener para o botão de busca
  document.getElementById('search-button').addEventListener('click', searchWords);
  
