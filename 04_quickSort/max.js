const max = (arr) => {
  let max = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

//console.log(max([2,3,5,9,2]));