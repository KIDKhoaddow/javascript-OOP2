class Hero{
    image;
    top;
    left;
    size;
    constructor(image,top,left,size) {
        this._image=image;
        this._top=parseInt(top);
        this._left=parseInt(left);
        this._size=size;
    }

    getImage(){
        return this._image
    }
    getTop(){
        return this._top
    }
    getLeft(){
        return this._left
    }
    getSize(){
        return this._size
    }
    
    setImage(image){
        this._image=image
    }
    setTop(top){
        this._top=top
    }
    setLeft(left){
        this._left=left
    }
    setSize(size){
        this._size=size
    }

    getHeroElement(){
        return '<img width="'+ this._size + '"' +
        ' height="'+ this._size + '"' +
        ' src="' + this._image +'"' +
        ' style="top: '+this._top+'px; left:'+this._left+'px;position:absolute;" />';
    }

    moveRight(){
        this._left += 20;
        console.log("ok: "+this._left);
    }
    moveDown(){
        this._top +=20;
        console.log("ok: "+this._top);
    }

    moveLeft(){
        this._left -=20;
        console.log("ok: "+this._left);
    }

    moveUp(){
        this._top -=20;
        console.log("ok: "+this._top);
    }

}


let hero=new Hero('pikachu.png',20,30,200);



function start(){
    if(hero._top == 20&&hero._left<=window.innerWidth - hero._size){
      hero.moveRight();
    }
    else if(hero._top <=window.innerHeight - hero._size&&hero._left >= window.innerWidth - hero._size){
        hero.moveDown();
      }
    else if(hero._top >=window.innerHeight - hero._size&&hero._left>=30){
        hero.moveLeft();
    }
    else if(hero._top -20<=window.innerHeight - hero._size&&hero._left +30>=30)
    {
        hero.moveUp();
    }
    document.getElementById("game").innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
  }

start();