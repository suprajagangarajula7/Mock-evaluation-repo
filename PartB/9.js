function displayCar(){
    console.log("car is Displayed");
}
function displayTruck(){
    console.log("Truck is Displayed");
}
function displayBike(){
    console.log("Bike is Displayed");
}

function vehicleInfo(vehicleCategory, callbackFn){
    console.log("Vechile category",vehicleCategory);
    callbackFn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck",displayTruck)
vehicleInfo("Bike",displayBike)
