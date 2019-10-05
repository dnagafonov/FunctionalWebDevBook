let [,,names] = ["Vanya,", "Polina", "Danila"];
console.table(names);

var myObject_standartFunction = {
  prop1: 'hello',
  prop2: 'world',
  output: function() {
    console.log(' STANDART_FUNCTION ' + this.prop1 + ` ` + this.prop2);
  }
};

myObject_standartFunction.output();

var myObject_arrowFunction = {
  prop1: 'hello',
  prop2: 'world',
  output: () => {
    console.log(' ARROW_FUNCTION '+ this.prop1 + ` ` + this.prop2);
  }
};

myObject_arrowFunction.output();

//get last element of array
let cars = ["Audi", "BMW", "Reno", "Opel"]
let [lastStupidCar] = cars.reverse()
let [lastCar] = [...cars].reverse() //correct
console.log(lastStupidCar)