function randomNumberGenerator(howManyDigits){
    let randomNumber = Math.random() * (10 ** howManyDigits);
    randomNumber = randomNumber.toFixed(0);
    return randomNumber;
}
