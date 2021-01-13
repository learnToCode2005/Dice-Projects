

// var players= document.cookie.``
console.log("players from cookies: ", document.cookie)
let images = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
var randomIndex1 = Math.floor(Math.random() * 6);
document.querySelector('#imgForPlayer1').setAttribute('src', images[randomIndex1]);

var randomIndex2 = Math.floor(Math.random() * 6);
document.querySelector('#imgForPlayer2').setAttribute('src', images[randomIndex2]);

if (randomIndex1 > randomIndex2) {
    document.querySelector('h1').innerText = `player1 has won the match`;
}else if (randomIndex1 === randomIndex2) {
    document.querySelector('h1').innerText = 'Draw';
}else{
    document.querySelector('h1').innerText = `player2has won the match`
}