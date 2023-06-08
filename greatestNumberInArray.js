function greatestNumberInArray(arr){
  let g = 0;
  for(let i = 0; i<arr.length;i++){
    if(g < arr[i]){
      g = arr[i]
    }
  }
  return g
}

function methodTwo(arr){
  return Math.max(...arr)
}
