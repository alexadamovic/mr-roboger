// Business Logic

function neighborhood(num) {
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i);
  }
  let numString = numArray.toString();
  let stringArray = numString.split(',');
  return stringArray;
}


// UI Logic

$(document).ready(function(){
  $("form#roboger").submit(function(event){
    event.preventDefault();



  });
});