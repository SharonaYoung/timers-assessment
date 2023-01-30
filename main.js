// target html elements
const body = document.querySelector('body');
const buttonEl = document.querySelector('button');
const h1El = document.querySelector('h1');


// timer setup
let timer = 10;
buttonEl.addEventListener('click', () => {
  console.log("button clicked");
  let intId = setInterval(() => {  
    h1El.textContent = `Time remaining: ${timer}`;
    if(timer === 0){
      clearInterval(intId);
      const timeUp = document.createElement('p');
      timeUp.innerText = "Time's up, you lost";
      document.body.appendChild(timeUp);
    }
    timer--;
  }, 1000)
});


// choose a random letter

// record user keyboard event

// if statement for if user selects correct letter

// image popup after 20s