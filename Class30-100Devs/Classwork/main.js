//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(make, color, size, price){
        this.make = make;
        this.color = color;
        this.size = size;
        this.price = price;
    }
    start(){
        console.log("It is on")
    }

    pause(){
        console.log("It is on pause")
    }

    stop(){
        console.log("It is stopped")
    }
}