function decryptNumbers(encryptedArray){
    let decryptedArray = [];
    for(let i = 0; i < encryptedArray.length; i++){
        decryptedArray.push(specialCharectors.indexOf(encryptedArray[i]));
    }
    return decryptedArray;
}
