class Battery{
    constructor(energy){
        this._energy=energy
    }

    getEnergy(){
        return this._energy
    }
    setEnergy(energy){
        this._energy=energy
    }

    decreaseEnergy(){
        this._energy-=1
    }

    increseEnergy(){
        this._energy+=1
    }

}
class FlashLamp {
    constructor(status,battery){
        this._status=Boolean(status)
        this._battery=battery
    }
    getBattery(battery){
        return this._battery.getEnergy();
    }
    setBattery(battery){
        this._battery=battery
    }
    Light(){
        if(this._status){
            alert("Lighting");
        }
        else{
            alert("Not lighting");
        }
    }
    TurnOn(){
        this._status=true
    }
    TurnOff(){
        this._status=false
    }
}