const recursiveBinarySearch = (arr, value, first, last) => {
  const mid = Math.floor((last + first) / 2);

  if (arr[mid] === value) {
    return mid;
  }

  if (first >= last) {
    return null;
  }

  if (arr[mid] >= value) {
    return recursiveBinarySearch(arr, value, first, mid - 1);
  } else {
    return recursiveBinarySearch(arr, value, mid + 1, last);
  }
}

//const arr = [1,3,7,11,22,45,66,99,123,243,1133,1233];
//console.log(recursiveBinarySearch(arr, 22, 0, arr.length - 1));