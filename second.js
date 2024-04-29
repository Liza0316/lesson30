const vehicle = {
    start(){
        console.log("started")
    },
    stop(){
        console.log("stoped")
    }
}

function Auto (brand, year, drive) {
this.brand = brand;
this.year = year;
this.drive = drive;
}

Auto.prototype = vehicle;
const trunk = new Auto("VOLVO", 2022, "driving");
const sedan = new Auto("Sedan", 2020, "undriving");

function bike (status, racing, year){
    this.status = status;
    this.racing = racing;
    this.year = year;
}

bike.prototype = vehicle;
const sportbike = new bike ("new", "been on racing", 2010);
const scooter = new bike ("second hand", "didnt racing", 2009);