function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}





function summElementsWorker(...arr) {
 let sum =0;
 for (let i=0; i< arr.length; i++){
  sum +=arr[i];
 }
 return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length ===0){
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  
  let result = max - min;
  return result;
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
for (let i=0; i< arr.length;i++){
  if (arr[i] % 2 ===0) {
   sumEvenElement += arr[i];
  } else {
    sumOddElement += arr[i];
  }  
}
let summm = sumEvenElement - sumOddElement;
return summm;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement =0;
  for (let i=0; i<arr.length;i++){
    if (arr[i] % 2 ===0){
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  let result = sumEvenElement / countEvenElement;
  return result;
}

function makeWork (arrOfArr, func) {

}
