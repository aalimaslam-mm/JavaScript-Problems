function sum(arr){
  let sum = 0; 
  for(let i =0; i < arr.length; i++){
      sum += arr[i]
  }
  return sum 
}

function sumOfEvenNumbers(arr){
  let sum = 0; 
  for(let i =0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
        sum += arr[i]
      }
  }
  return sum
}


function sumOfOddNumbers(arr){
  let sum = 0; 
  for(let i =0; i < arr.length; i++){
      if(arr[i] % 2 != 0){
        sum += arr[i]
      }
  }
  return sum
}
