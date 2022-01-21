// Business Logic

function neighborhood(num) {
  let numArray = [0];
  let indexNumber = num
  for (let i = 0; i <= indexNumber; i++) {
    numArray.push(i);
  }
  return numArray;
}


// UI Logic

$(document).ready(function(){
  $("form#roboger").submit(function(event){
    event.preventDefault();



  });
});