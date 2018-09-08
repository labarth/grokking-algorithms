const recursiveCount = (arr) => {
  if (arr.length === 0) return 0;

  return 1 + recursiveCount(arr.slice(1));
}

//console.log(recursiveCount([2,3,5,9,2]));