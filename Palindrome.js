function palindrome(str){
    let palindromeFlag = false; // this will be returned after check if the string is Palindrome or not
    let length = str.length; // get the length of string for exapmple "hi" will return 2
    let j = length - 1; // this will be used to check the string from backwards
    for(let i =0; i <= length / 2;i++){ // run this loop till mid point of the string
        if(str[i] == str[j]){ // check if the letter from front = letter from back
            palindromeFlag=true // if it is same from back to front and vice versa, return true
        }
        else{
            palindromeFlag=false  // if its not, return false
        }
        j--;  // this is running from backside 
    }
    return palindromeFlag // returning the flag to show that if it is palindrome or not
}
