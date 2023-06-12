//shift function polyfill
function removeAtStart(arr){
    for(let i = 0; i< arr.length; i ++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1
    return arr
}


//pop function polyfill
function removeAtLast(arr){
  arr.length = arr.length - 1
  return arr
}

function removeEven(arr){
    let newArr = [];
    arr.forEach(elem=>{
        if(elem % 2 != 0){
            newArr.push(elem)
        }
    })
    return newArr
}

function removeOdd(arr){
    let newArr = [];
    arr.forEach(elem=>{
        if(elem % 2 == 0){
            newArr.push(elem)
        }
    })
    return newArr
}

function removeSpecificElement(arr, elemToRemove){
  for(let i =0 ; i < arr.length; i++){
      if(arr[i] == elemToRemove){
          for(let j = i; j < arr.length-1; j++){
            arr[j] = arr[j+1];
          }
          arr.length = arr.length - 1
          break;
      }
  }
  return arr
}



