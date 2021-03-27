const CarManager = (function() {
  return {
    requestInfo : function(model, id) {
      console.log(`The information for ${model} with id ${id} is foobar`);
    },
    buyVehicle : function(model, id) {
      console.log(`You have successfully purchased item ${id}, a ${model}`);
    },
    arrangeViewing : function (model, id) {
      console.log(`You have succcessfully booked a viewing of ${model} (${id})`);
    }
  };
})();

// Command Pattern implementation
CarManager.execute = function(name) {
  return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
};

// Command pattern usage
CarManager.execute('requestInfo', 'Ford', 101);
CarManager.execute('buyVehicle', 'Skoda', 102);
CarManager.execute('arrangeViewing', 'Audi', 103);
