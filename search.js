function search(arr, elementToSearch){
    for (let i =0; i<arr.length; i++){
        if(arr[i] == elementToSearch){
            return "Element Found"
        }
    }
    return "Element Not Found"
}

function searchTwo(arr, elementToSearch){
    return arr.includes(elementToSearch)
}

function searchThree(arr, elementToSearch){
    let found = (arr.find(e=> e == elementToSearch)) ? true : false 
    return found
}

