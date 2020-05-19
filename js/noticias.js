const API_KEY = '54f8f7e65707407980fab520fd17b747';
const API_BASE = 'http://newsapi.org/v2';

//async-await para não usar o then
async function getNoticiasAwait() {
    const resposta = await fetch(`${API_BASE}/top-headlines?country=br&apiKey=${API_KEY}`);
    const listaNoticias = await resposta.json();
    console.log(listaNoticias);
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