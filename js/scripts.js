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
};


//User Interface Logic
$(document).ready(function(event) {
  $("form#pizza-form").submit(function(event){
  event.perventDefault();
  let size = $("#select-size option:selected").val();
  let toppings = $("input:checkbox[name=toppings]:checked").map(function(){
    return this.value
  });


  })

})