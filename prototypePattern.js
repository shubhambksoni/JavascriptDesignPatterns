/** This file shows several ways to use Prototype Pattern in Javascript using Vehicle example 
    1. Use Object.create
    2. Vanilla JS implementation on our own
*/

// Our prototype object: 

const vehiclePrototype = {
  init: function (carModel) {
    this.model = carModel;
  },
  getModel: function () {
    console.log(`The model of this car is ${this.model}`); 
  }
};

// Using Object.create:

const fordCar = Object.create(vehiclePrototype);
fordCar.init("Ford");
fordCar.getModel();

// Implementation a:

function Vehicle (model){
  function F () {}

  F.prototype = vehiclePrototype;

  const f = new F();
  
  f.init(model);
  return f;
}

const rangeRoverCar = new Vehicle("Range Rover");
rangeRoverCar.getModel();

// Implementation b:

const VehicleCreator = (function () {
  return function (proto) {
    function F () {}
    F.prototype = proto;
    return new F();
  }
})();
                 
const porscheCar = new VehicleCreator(vehiclePrototype);
porscheCar.init("Porsche");
porscheCar.getModel();
