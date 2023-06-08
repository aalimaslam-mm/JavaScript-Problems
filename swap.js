//on anything
function swapOne (x,y){
  let temp =x
  x= y
  y=x
  return [x,y]
}

//Only on numbers
function swapTwo (x,y){
    x=x+y;
    y = x-y;
    x = x-y
    console.log(x,y)
}

// on anything 
function swapThree(x,y){
    return [y,x]
}
