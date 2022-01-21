// Business Logic

function neighborhood(num) {
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i);
  }
  let stringArray = [];
  numArray.forEach(element)
    stringArray.push(toString(element));
  return stringArray;
}


// UI Logic

$(document).ready(function(){
  $("form#roboger").submit(function(event){
    event.preventDefault();



  });
});