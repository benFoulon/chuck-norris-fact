'use strict'


const background = document.querySelector('#background');
const output = document.querySelector('#output')
const btn = document.querySelector('#btnNewQuote')


const quote =[
    "Chuck Norris peut faire des ronds avec une equerre",
    "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon.",
    "Google, c'est le seul endroit où tu peux taper Chuck Norris..",
    "Chuck Norris peut taguer le mur du son",
    "Chuck Norris a fait une clé-de-bras a Rayman",
    "Quand Chuck Norris fait des pompes, il n’étend pas son corps vers le haut, il repousse la Terre vers le bas.",
    "Un jour, Chuck Norris a avalé un tube entier de somnifères , il a cligné des yeux.",
    "Chuck Norris peut diviser par zéro.",
    "Jésus est né en 1940 avant Chuck Norris.",
    "Dieu voulait créer l’Univers en dix jours. Chuck Norris lui en a laissé six. ",
]

function randomColor(){
    const color='rgb('+Math.round(Math.random()*256)+','+Math.round(Math.random()*256)+','+Math.round(Math.random()*256)+')';

    return color;
}

    
    function randomBody(){
        const inherited = randomColor();
        document.body.style.backgroundColor = inherited;
        output.style.color = inherited;
        btn.style.background = inherited;
    }
    
    randomBody()
    

function randomQuote(){
    const rdmQuote = quote[Math.floor(Math.random() * quote.length)];
    output.innerHTML = rdmQuote;
}

btn.addEventListener('click', randomQuote)
btn.addEventListener('click', randomBody)