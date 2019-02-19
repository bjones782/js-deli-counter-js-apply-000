var i = 0
function takeANumber (katzDeliLine) {
  i++
  katzDeliLine.push(i)
  return `Welcome, you are number: ${i}.`
}

const arr = []
console.log(takeANumber(arr)) // 1
console.log(takeANumber(arr)) // 2
console.log(takeANumber(arr)) // 3
console.log(arr)

function nowServing(katzDeliLine){
  if(katzDeliLine.length){
    return 'Currently serving ' + katzDeliLine.shift() + ".";
  } else return `There is nobody waiting to be served!`
}
function currentLine(katzDeliLine){
  var string = `The line is currently: `;
  if(katzDeliLine.length){
    for(var i = 0; i<katzDeliLine.length; i++){
      string += (i+1) + ". " + katzDeliLine[i];
      if(i !== katzDeliLine.length-1){
        string += ", ";
      }
    }
  } else return "The line is currently empty.";
  return string;
}