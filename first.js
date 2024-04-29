const Vehicle = {
    start(){
        console.log("started")
    },
    stop(){
        console.log("stoped")
    }
}
const Bike ={
    sound(){
        console.log("bshhhh")
    },
    locking(){
        console.log("locked")
    }
}
const Car = {
    drive(){
        console.log("drived")
    },
    parking(){
        console.log("parked")
    }
}

Object.setPrototypeOf(Car, Vehicle)
Bike.__proto__= Vehicle

const Truck = Object.create(Car, {
    Opened(){
        console.log("Opened")
    },
    Close(){
        console.log("closed")
    }
})
const Sedan = Object.create(Car, {
    clean(){
        console.log("clean")
    },
    dirty(){
        console.log("unclean")
    }
})

const SportBike = Object.create(Bike, {
    racing(){
        console.log ("been on racing")
    },
    unracing(){
        console.log("didnt de on racing")
    }
})
const Scooter = Object.create(Bike, {
    new(){
        console.log("new bike")
    },
    old(){
        console.log("second hand bike")
    }
})