// Business Logic

function neighborhood(num) {
  let lengthArray = [];
  lengthArray.length = num;
  let numArray = [];
  lengthArray.forEach(function(element) {
    numArray.push(1);
  });  
  return numArray
}


// UI Logic

$(document).ready(function(){
  $("form#roboger").submit(function(event){
    event.preventDefault();



  });
});