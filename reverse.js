function reverse(arr){
  let newArr = []
  let j = 0;
  for(let i =arr.length - 1 ; i >= 0; i--){
    newArr[i] = arr[j]
    j++; 
  }
  return newArr
}
