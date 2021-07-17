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
    case ("small"):
      this.cost = 10 + this.toppings.lenght;
      message.push("Your total is $" + this.cost)
      break;
    default:
      message.push("Please pick a pizza size!")


  }
  return this.cost;
}


//User Interface Logic
$(document).ready(function (event) {
  $("form#pizza-form").submit(function (event) {
    event.preventDefault();
    let size = $("#select-size option:selected").val();
    let toppings = $("input:checkbox[name=toppings]:checked").map(function () {
      return this.value
    });
    let pizza1 = new pizza(size, toppings);
    $("div#toppings-div").empty();
    $("div#toppings-div").append("Number of Toppings:" + pizza1.toppings.length);
    $("div#size-append").empty();
    $("div#size-append").append("Pizza size:" + pizza1.size);
    let message = [];
    pizza1.determineCost(message);
    $("div#cost").empty();
    $("div#cost").append(message);
  });
});