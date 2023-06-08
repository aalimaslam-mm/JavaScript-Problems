function fibonacci(){
    let x = 0,y=1;
    for(let i =0; i<5; i++){
            x = x+y
            y = x+y
            console.log(x,y)
    }
    console.log(x,y)
}
fibonacci()
