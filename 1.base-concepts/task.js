"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d < 0){
    return arr;
  } else if(d === 0) {
    let x = -b / (2*a);
    arr.push(x);
  } else {
    let x = (-b + Math.sqrt(d) )/(2*a);
    let y = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x, y);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = (percent /100) /12;
  let body = amount - contribution;
  let payment = body * (percent +(percent / (((1+percent)**countMonths)-1)));
  let summ = payment * countMonths.toFixed(2);
  return summ;
}