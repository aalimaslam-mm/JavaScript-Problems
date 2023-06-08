function duplicate(arr){
  let duplicate = false;
  for(let i =0; i < arr.length; i ++){
      for(let j = i+1 ; j < arr.length; j++){
          if(arr[i] == arr[j]){
              duplicate = true
          }
      }
  }
  return duplicate
}

