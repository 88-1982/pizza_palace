//Business Logic
function pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

pizza.prototype.determineCost = function (message) {
  switch (this.size) {
    case ("Large"):
      this.cost = 30 + this.toppings.length;
      message.push("Your total is $" + this.cost)
      break;
    case ("medium"):
      this.cost = 20 + this.toppings.length;
      message.push("Your total is $" + this.cost)
      break;

  }
}