const num = function(){
  let numArray = [];
  for(let i = 1; i <= 100; i++){
    numArray.push(i);
  }
  return numArray;
}

const zeroCool = function(arr){
  let holder = [];
  arr.forEach(function(num){
    if(num % 3 === 0 && num % 5 === 0){
      holder.push("ZeroCool");
    } else if(num % 3 === 0){
      holder.push("Zero");
    } else if(num % 5 === 0){
      holder.push("Cool");
    } else {
      holder.push(num);
    }
  });
  return holder;
}

zeroCool(num());

function loadNumbers(){
  document.getElementById("placement").innerText = zeroCool(num());
}