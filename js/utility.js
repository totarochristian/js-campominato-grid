const numberOfBomb = 16;
const squareEasy = 10;
const squareMedium = 9;
const squareHard = 7;

function BtnPlayClicked(){
    const difficulty = document.getElementById("difficulty").value;
    const numSquare = GetNumberOfSquares(difficulty);
    DrawField(numSquare);
}

function GetNumberOfSquares(difficulty){
    switch(difficulty){
        case 1: return squareEasy;
        case 2: return squareMedium;
        case 3: return squareHard;
    }
    return squareEasy;
}

function DrawField(square){
    for(let i=1; i<=(square*square); i++){
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