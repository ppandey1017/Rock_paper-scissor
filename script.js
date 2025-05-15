const upperBlock = document.querySelector(".upperBlock");
const newGameBtn = document.querySelector('.newGame');
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const img = document.querySelectorAll('img');

const rock1 = document.querySelector('.rock1');
const paper1 = document.querySelector('.paper1');
const scissor1 = document.querySelector('.scissor1');

const rock2 = document.querySelector('.rock2');
const paper2 = document.querySelector('.paper2');
const scissor2 = document.querySelector('.scissor2');

const rrock = document.querySelector('.rock');
const ppaper = document.querySelector('.paper');
const sscissor = document.querySelector('.scissor');
const btns = document.querySelectorAll('.btn');
const result = document.querySelector('.result');

const wonCount = document.querySelector('.wonCount');
const drawCount = document.querySelector('.drawCount');
const lostCount = document.querySelector('.lostCount');

const popup = document.querySelector('.popupEmoji');


const winningCondition = [
    ['Rock', 'Scissor'],
    ['Paper', 'Rock'],
    ['Scissor', 'Paper']
];

let dr = 0;
let youWon = 0;
let count = 0;
let lose = count - (youWon + dr);
let playerChoice = "";
let computerChoice = "";

function hideImage() {
    img.forEach((image) => {
        image.style.display = "none";
    });
}
hideImage();

// ................................................... Player and Computer choice function ....................................................
function showPlayerImage(choice) {
    hideImage();
    playerChoice = choice;
    if (choice === "Rock") rock1.style.display = "inline";
    if (choice === "Paper") paper1.style.display = "inline";
    if (choice === "Scissor") scissor1.style.display = "inline";
}

function showComputerImage(choice) {
    computerChoice = choice;
    if (choice === "Rock") rock2.style.display = "inline";
    if (choice === "Paper") paper2.style.display = "inline";
    if (choice === "Scissor") scissor2.style.display = "inline";
}


// ........................................................... Check winner function ..........................................................
function checkWinner() {
    let emoji = '';
    if (playerChoice === computerChoice) {
        dr++;
        count++;
        // console.log("DRAW!");
        drawCount.innerText = dr;
        showResultEmoji('dr');
        return;
    }
    for (let i of winningCondition) {
        if (playerChoice === i[0] && computerChoice === i[1]) {
            youWon++;
            count++;
            showResultEmoji('youWon');
            // console.log('YOU WON!');
            wonCount.innerText = youWon;
            return;
        }
    }
    count++;
    // console.log('YOU LOST');
    lostCount.innerText = count - (youWon + dr);
    showResultEmoji('lose')
}


// ....................................................button vale or show krne vale function ...................................................
rrock.addEventListener("click", () => {
    showPlayerImage("Rock");
});
ppaper.addEventListener("click", () => {
    showPlayerImage("Paper");
});
sscissor.addEventListener("click", () => {
    showPlayerImage("Scissor");
});

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const choices = ["Rock", "Paper", "Scissor"];
        const random = choices[Math.floor(Math.random() * choices.length)];
        showComputerImage(random);
        checkWinner();
    });
});

newGameBtn.addEventListener("click", () => {
    dr = 0;
    youWon = 0;
    count = 0;
    drawCount.innerText = '0';
    wonCount.innerText = '0';
    lostCount.innerText = '0';
    playerChoice = "";
    computerChoice = "";
    hideImage();
    console.log("Game Reset");
});



// ............................................................ Show emojiii vala function ......................................................
function showResultEmoji(type) {
    let emoji = '';
    if (type === 'youWon') emoji = '😁';
    else if (type === 'dr') emoji = '😐';
    else emoji = '😭';

    popup.innerText = emoji;
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 1000); // disappears after 1.0 sec
}