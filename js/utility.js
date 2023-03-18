const numberOfBomb = 16;
const squareEasy = 10;
const squareMedium = 9;
const squareHard = 7;

function BtnPlayClicked(){
    const difficulty = parseInt(document.getElementById("difficulty").value);
    const numSquare = GetNumberOfSquares(difficulty);
    DrawField(numSquare);
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
    for(let i=1; i<=(squares*squares); i++){
        const sqr = document.createElement("div");
        sqr.id = "square_" + i;
        sqr.classList.add("square");
        sqr.classList.add("d-flex");
        sqr.classList.add("d-f-just-center");
        sqr.classList.add("d-f-vert-align-center");
        sqr.classList.add("fw-bold");
        sqr.classList.add("fs-p");
        sqr.classList.add("trans-all-0_2s-linear");
        sqr.innerText = i;
        sqr.addEventListener("click",function(){
            console.log(this.innerText);
        })
        document.getElementById("gameContainer").appendChild(sqr);
    }
}

function CleanChildsOfElementById(id){
    const gc = document.getElementById(id);
    gc.innerHTML = '';
}