let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let message = document.querySelector("#message");

let turn = "X";
let gameOver = false;

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach(function(box){

    box.addEventListener("click",function(){

        if(box.innerText==="" && !gameOver){

            box.innerText=turn;

            checkWinner();

            if(!gameOver){

                if(turn==="X"){
                    turn="O";
                }
                else{
                    turn="X";
                }

                checkDraw();
            }

        }

    });

});

function checkWinner(){

    for(let i=0;i<winPattern.length;i++){

        let a=winPattern[i][0];
        let b=winPattern[i][1];
        let c=winPattern[i][2];

        if(
            boxes[a].innerText!=="" &&
            boxes[a].innerText===boxes[b].innerText &&
            boxes[b].innerText===boxes[c].innerText
        ){

            message.innerText=boxes[a].innerText+" Wins!";
            gameOver=true;
            return;
        }

    }

}

function checkDraw(){

    let filled=true;

    boxes.forEach(function(box){

        if(box.innerText===""){
            filled=false;
        }

    });

    if(filled && !gameOver){
        message.innerText="Match Draw";
        gameOver=true;
    }

}

reset.addEventListener("click",function(){

    boxes.forEach(function(box){
        box.innerText="";
    });

    turn="X";
    gameOver=false;
    message.innerText="";

});
