// Business Logic

function neighborhood(num) {
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i);
  }
  let numString = numArray.toString();
  let stringArray = numString.split(',');
  let robogerArray = []
  stringArray.forEach(function(element) {
    if (element.includes('2')) {
      robogerArray.push("Boop")
    } else if (element.includes('1')) {
      robogerArray.push("Beep!");
    }
    else robogerArray.push(element);
  });
  return robogerArray;
}


// UI Logic

$(document).ready(function(){
  $("form#roboger").submit(function(event){
    event.preventDefault();



  });
});