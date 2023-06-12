function count(arr){
  let count = 0;
  for(let i =0; i < arr.length ; i++){
    count++
  }
  return count
} 

function countSpecific(arr, elemToCount){
  let count = 0;
  for(let i =0; i < arr.length ; i++){
    if(arr[i] == elemToCount){
      count++
    }
  }
  return count
}
