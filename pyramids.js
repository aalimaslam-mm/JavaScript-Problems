function basicPyramid(numberOfLines){
  let output = '';
    for (let i = 1; i <= numberOfLines; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
     /*
 1
 12
 123
 1234
 12345
  */
}

function reversePyramid(numberOfLines){
    let output = '';
    for (let i = 1; i <= numberOfLines; i++) {
        for (let j = numberOfLines; j >= i; j--) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
     /*
   54321
   4321
   321
   21
   1
  */
}

function square(n){
  let string = "";
  for(let i = 0; i < n; i++) { 
    for(let j = 0; j < n; j++) { 
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
   /*
   *****
   *****
   *****
   *****
   *****
  */
}

function rightTriangle(n){
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  /*
       *
      **
     ***
    ****
   *****
  */
}
