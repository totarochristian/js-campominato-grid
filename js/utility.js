const numberOfBomb = 16;
const squareEasy = 10;
const squareMedium = 9;
const squareHard = 7;
const bombs = [];

function BtnPlayClicked(){
    const difficulty = parseInt(document.getElementById("difficulty").value);
    const numSquare = GetNumberOfSquares(difficulty);
    DrawField(numSquare);
    ChoseBombPositions(numSquare);
}

function GetNumberOfSquares(difficulty){
    let res = 0;
    switch(difficulty){
        case 1: 
            res = squareEasy;
            break;
        case 2:
            res = squareMedium;
            break;
        case 3:
            res = squareHard;
            break;
    }
    return res;
}

function DrawField(squares){
    document.documentElement.style.setProperty('--numOfSquarePerRow', squares);
    CleanChildsOfElementById("gameContainer");
    for(let i=1; i<=(squares*squares); i++)
        DrawSquare(i);
}

function DrawSquare(index){
    const sqr = document.createElement("div");
    sqr.id = "square_" + index;
    sqr.classList.add("square");
    sqr.classList.add("d-flex");
    sqr.classList.add("d-f-just-center");
    sqr.classList.add("d-f-vert-align-center");
    sqr.classList.add("fw-bold");
    sqr.classList.add("fs-p");
    sqr.classList.add("trans-all-0_2s-linear");
    sqr.innerText = index;
    sqr.addEventListener("click",function(){
        const index = parseInt(this.innerText);
        if(IsBomb(index))
            UserClickedBomb(this);
        else
            UserClickedGrass(this);
    })
    document.getElementById("gameContainer").appendChild(sqr);
}

function CleanChildsOfElementById(id){
    const gc = document.getElementById(id);
    gc.innerHTML = '';
}

function IsBomb(index){
    return bombs.indexOf(index) >= 0 ? true : false;
}

function PlaySound(name){
    let sound = new Audio(name);
	sound.play();
}

function UserClickedBomb(obj){
    obj.innerHTML = '<img class="height-100-p" src="../assets/img/bomb2.png"></img>';
    PlaySound("../assets/sound/bomb.mp3");
}

function UserClickedGrass(obj){
    obj.innerHTML = '<img class="height-100-p" src="../assets/img/grass2.png"></img>';
    PlaySound("../assets/sound/grass.wav");
}

function ChoseBombPositions(numSquare){
    bombs.length = 0;
    for(let i=0; i<numberOfBomb; i++){
        let pos = GetRandomInt(numSquare*numSquare,1);
        if(bombs.indexOf(pos)<0)
            bombs.push(pos);
        else
            i--;
    }
}

/**
 * Function that will generate a random int
 * @param {bigint} max Max value of the interval
 * @param {bigint} min Min value of the interval
 * @returns {bigint} Generated random int value
 */
function GetRandomInt(max,min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}