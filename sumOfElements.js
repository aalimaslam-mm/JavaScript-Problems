function sum(arr){
  let sum = 0;
  for(let i =0; i<arr.length;i++){
    sum += arr[i]
  } 
  return sum
}


function sumTwo(arr){
     return arr.reduce((x,y)=> x+y)
}
