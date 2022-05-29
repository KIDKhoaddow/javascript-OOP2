let isRivalTurn=true;
let arrBoard=new Array();
let boxNone=1;
let boxX=2;
let boxO=3;



function resetGame(){
    document.getElementById("board").innerHTML=null
}


function drawBoard(){
let numberBox=parseInt(document.getElementById("numberBox").value);
let boardChess=""
for(let i=0;i<numberBox;i++){
    boardChess+="<tr>"
    arrBoard[i]=new Array();
    for(let j=0;j<numberBox;j++){
        arrBoard[i][j]=boxNone;
        boardChess+="<td onclick=play("+i+","+j+")><span id=display"+i+j+"></span></td>"
    }
    boardChess+="</tr>"
}
document.getElementById("board").innerHTML=boardChess;

}




function play(x,y){
    let elementTitle="display"+x+y
   
    if(isRivalTurn&&!isTicked(x,y)){
        arrBoard[x][y]=boxX;
        document.getElementById(elementTitle).innerText="x"
        isRivalTurn=false
    }else if(!isRivalTurn&&!isTicked(x,y)){
        arrBoard[x][y]=boxO;    
        document.getElementById(elementTitle).innerText="o"
        isRivalTurn=true
    }
}

function isTicked(x,y){
    let box=arrBoard[x][y]
    if(box==1){
        return false
    }
    else
    {
        return true
    }
}


