let gameSeq = [];
let userSeq = [];
let highScore = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;



let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
    }

    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;

    h2.innerText = `level ${level}`;

    //randome btn choose
    let randomIdx = Math.floor(Math.random() *3);
    let randomColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    highscore.push(level);

    // console.log(randbtn);
    // console.log(randomColor);
    // console.log(randomIdx);

    gameFlash(randbtn);
}

function checkAns(idx){
    // console.log("curr level: ",level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start `;

        h3.innerHTML = `your highest score is ${highScore}`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}


function btnPress() {
    let  btn = this;
    userFlash(btn)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started == false;
    gameSeq = [];
    userSeq = [];
    level = 0;
} 

