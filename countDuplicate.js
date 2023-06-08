function countDuplicate (arr){
  let count = {}
  arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  return count
}
