function smallestInArray (arr){
  let s = arr[0];

  for(let i = 0; i < arr.length;i++){
    if(s > arr[i]){
        s = arr[i]
    }
  }
  return s
}

function methodTwo (arr){
  return Math.min(...arr)
}
