// Business Logic

function neighborhood(num) {
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i);
  }
  let stringArray = (numArray.toString()).split(',');
  let robogerArray = []
  stringArray.forEach(function(element) {
    if (element.includes('3')) {
      robogerArray.push("Won't you be my neighbor?")
    } else if (element.includes('2')) {
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