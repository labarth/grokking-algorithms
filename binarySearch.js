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

const arr = [];
for (let i = 1; i < 100; i++) {
  arr.push(i);
}

binarySearch(arr, 26);
