const specialCharectors = ["#","%","^","&","*","(","_","=","-","+"];

function encryptNumbers(num){
    let lastNum;
    let num2 = num + "";
    let encryptedArray = []
    for(let i =0; i<num2.length;i++){
        lastNum = num %10;
        num /= 10;
        num = num.toFixed(0);
        encryptedArray.push(specialCharectors[lastNum])
    } 
    return encryptedArray.reverse();
}
