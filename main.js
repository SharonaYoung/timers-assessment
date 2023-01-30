// target html elements
const body = document.querySelector('body');
const buttonEl = document.querySelector('button');
const h1El = document.querySelector('h1');

// key pressed
let keyPressed;
body.addEventListener('keydown', function(event){
  keyPressed= event.key;
});

// timer setup
let timer = 10;
const guess = document.createElement('p');
  guess.innerText = "Guess the secret letter before time runs out..."
buttonEl.addEventListener('click', () => {
  body.appendChild(guess);
  let intId = setInterval(() => {  
    h1El.textContent = `Time remaining: ${timer}`;
    const timeUp = document.createElement('p');
    if(keyPressed === secretLetter){
      clearInterval(intId);
      timeUp.innerText = `Congratulations! You matched the secret letter, ${secretLetter}.`;
      body.appendChild(timeUp);
    }else if(timer === 0){
      clearInterval(intId);
      timeUp.innerText = `You lose! The secret letter was ${secretLetter}.`;
      document.body.appendChild(timeUp);
    }
    timer--;
  }, 1000)
  randomLetter();
});

// choose a random letter
// make an array of alphabet
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let secretLetter = '';
const randomLetter = () => {
  secretLetter = letters[Math.floor(Math.random() * 26)]
  console.log(secretLetter);
}

// image popup after 20s
const image = document.createElement('img');
image.src = "cat.jpg"
setTimeout(() => {
  body.appendChild(image);
}, 20000);