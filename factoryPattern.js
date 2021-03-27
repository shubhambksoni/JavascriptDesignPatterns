const Car = function(options) {
  this.doors = options.doors || 4;
  this.state = options.state || 'brand new';
  this.color = options.color || 'red';
};

const Truck = function(options) {
  this.state = options.state || 'brand new';
  this.wheelSize = options.wheelSize || 'large';
  this.color = options.color || 'red';
};

function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options) {
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
  }
  return new this.vehicleClass(options);
}

const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
  color : 'blue',
});

console.log(car);

// Approach #1
const truckOne = carFactory.createVehicle({
  color : 'white',
  vehicleType : 'truck'
});

console.log(truckOne);


// Approach #2

function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

const truckFactory = new TruckFactory();
const truckTwo = truckFactory.createVehicle({
  color : 'black'
});

console.log(truckTwo);
