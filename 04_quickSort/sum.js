const sumLoop = (arr) => {
  if (!arr.length) return 0;

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

//console.log(sumLoop([4,3,2,1]));
