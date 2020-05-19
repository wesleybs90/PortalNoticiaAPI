const API_KEY = '54f8f7e65707407980fab520fd17b747';
const API_BASE = 'http://newsapi.org/v2';
const listaDeNoticias = document.getElementById('listaDeNoticias');
const navBar = document.getElementById('navbarNav');
const MAX_LENGTH = 100;

//async-await para não usar o then
async function getNoticiasAwait(tipoNoticias) {
    const resposta = await fetch(`${API_BASE}/top-headlines?category=${tipoNoticias}&country=br&apiKey=${API_KEY}`);
    const listaNoticias = await resposta.json();

    listaDeNoticias.innerHTML = "";
    listaNoticias.articles.forEach(noticia => {
        if (noticia.description.length > MAX_LENGTH) {
            noticia.description = noticia.description.substring(0, MAX_LENGTH) + "...";
        }

        listaDeNoticias.innerHTML += `<div class="col-12 col-sm-6 col-md-4 mt-4">
        <div class="card">
          <img src="${noticia.urlToImage}" class="card-img-top" alt="${noticia.title}">
          <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p>
            <a href="${noticia.url}" class="btn btn-primary">Ler Notícia</a>
          </div>
        </div>
      </div>`
    })
}

//com then
function getNoticias() {
    fetch(`${API_BASE}/top-headlines?country=br&apiKey=${API_KEY}`)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (listaNoticias) {
        console.log(listaNoticias);
    })
}


let categoria = 'general';
navBar.addEventListener('click', function (event) {
    switch (event.target.innerText) {
        case 'Ultimas Noticias':
            categoria = 'general';
            break;
        case 'Noticias de Tecnologia':
            categoria = 'technology';
            break;
        case 'Atualizar':
            getNoticiasAwait(categoria);
            break;
    }
    getNoticiasAwait(categoria);
})

getNoticiasAwait(categoria);