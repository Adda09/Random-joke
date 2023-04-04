const paragh = document.getElementById('paragh')
const btn = document.getElementById('btn')
const Url = 'https://v2.jokeapi.dev/joke/Any';

let getJoke = () =>{
    fetch(Url).then(res => res.json())
    .then((item) =>
        {paragh.textContent = `${item.joke}`; })
}



btn.addEventListener('click', getJoke)
getJoke()