let random=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrhi=document.querySelector(".lowOrHi")
const startover=document.querySelector(".resultParas")

const p= document.createElement("p")
let prevGuess=[]
let numguess=1
let playGame=true
if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
if(isNaN(guess)){
  alert(`Enter a valid input Random No. :${random}`)
  
}
else if(guess<1){
  alert(`given no. is less than one :${random}`)
 
}
else if(guess>100){
  alert(`given no.is greater than hundred :${random}`)
  
}
else{
  prevGuess.push(guess)
  if(numguess>10){
    guessDisplay(guess)
    displayMessage(`Game over and random number was ${random}`)
    endgame()
  }
  else{
    guessDisplay(guess)
    checkGuess(guess)
  }
}

}
function checkGuess(guess){
  if(guess===random){
    displayMessage(`YEH ,You Guess it Right`)
    endgame()
  }
  else if(guess>random){
    displayMessage(`Number is too high`)
  }
  else if(guess<random){
    displayMessage(`Number is too low`)
  }

}

function guessDisplay(guess){
  userInput.value=''
  guessSlot.innerHTML=guessSlot.innerHTML+`${guess} , `
  numguess++
  remaining.innerHTML=`${11-numguess}`

}
function displayMessage(message){
   lowOrhi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
  userInput.value=""
  userInput.setAttribute("disabled","")
  p.classList.add("button")
  p.innerHTML=`<h2 id="newGame">Start new game</h2>`
  startover.appendChild(p);
  playGame=false
newgame
}
function newgame(){
const newGameButton=document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
  random=parseInt(Math.random() * 100 + 1)
  prevGuess=[]
  numguess=1
  guessSlot.innerHTML=`${11-numguess}`
  userInput.removeAttribute('disabled')
  startover.removeChild(p)

  playGame=true
})
}