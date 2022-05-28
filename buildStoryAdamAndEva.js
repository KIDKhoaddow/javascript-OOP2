class Apple {
    weight;
    constructor(weight) {
        this._weight = weight;
    }

    getWeight() {
        return this._weight;
    }
    setWeight(weight) {
        this._weight = weight;
    }
    decreaseApple(){
        if(this.isEmpty()){
            alert("Táo đã hết rồi");
        }else {
            this.weight--;
        }
    }
    isEmpty() {
        if (this._weight == 0) {
            alert("tao da an het roi!")
            return true;
        }
        else false;
    }
}

class Human {
    name;
    gender;
    weight;
    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = parseInt(weight);
    }
    getName() {
        return this._name;
    }
   
    getGender(){
        if(this.isMale()){
            return "Male";
        }else {
            return "Female";
        }
    }
    getWeight() {
        return this._weight;
    }
    setName(name) {
        this._name = name;
    }
    setGender(gender) {
        this._gender = gender;
    }
    setWeight(weight) {
        this._weight = weight;
    }

    isMale(){
        if(this.gender == 1){
            return true;
        }else {
            return false;
        }
    }
    getInfo(){
        return alert(Human.getName() + " " +Human.getWeight() + " " +Human.getGender());
    }
    eat(Apple) {
        if (!Apple.isEmpty()) {
            Apple.decrease();
            this._weight += 1;
        }
    }
    say(String) {
        return console.log(String)
    }
    checkApple(Apple) {
        if (!Apple.isEmpty()) {
            console.log("Van con an duoc")
            return true
        }
        else {
            console.log("Tao an het roi")
            return false
        }
    }

}