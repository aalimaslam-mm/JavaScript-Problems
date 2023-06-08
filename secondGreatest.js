function secondGreatest(arr){
  let s = arr[0]
    let g = s;

    for(let i =0 ; i < arr.length; i++){
        if(arr[i] > g){
            s = g
            g = arr[i]
        }
        else if(arr[i] < g && arr[i] > s){
            s = arr[i]
        }
    }
    return [g,s] 
}
