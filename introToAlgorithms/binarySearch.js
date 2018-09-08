const binarySearch = (arr, value) => {
  let first = 0;
  let last = arr.length - 1;

  while(first <= last) {
    const mid = Math.floor((last + first) / 2);

    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] > value) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return null;
}

//const arr = [1,3,7,11,22,45,66,99,123,243,1133,1233];
//console.log(binarySearch(arr, 22));
