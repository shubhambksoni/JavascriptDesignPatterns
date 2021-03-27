const bugsBunny = (function() {
  const basicBunny = {
    name : 'Unknown',
    getGreeting : function() {
      console.log(`My name is ${this.name}, I'm a bunny!`);
    },
    setName : function(newBunnyName) {
      this.name = newBunnyName;
    },
    makeThemRun : function() {
      console.log(`${this.name} bunny is now running`);
    }
  };

  // Returning a facade (sayHiToABunny) implementation to caller
  return {
    sayHiToABunny : function(args){
      if(args.name) {
        basicBunny.setName(args.name);
      }
      basicBunny.getGreeting();
      if(args.shouldTheyRun){
        basicBunny.makeThemRun();
      }
    }
  };
})();

// Usage
bugsBunny.sayHiToABunny({name : 'Bugs', shouldTheyRun : true});
