const quickSort = (arr) => {
  let temp = 0;
  if (arr.length < 2) return arr;

  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
  }

  const more = [];
  const less = [];
  const first = arr[0];

  for ( let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      more.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return quickSort(less).concat(arr[0]).concat(quickSort(more));
}

const arrQuickSort = [10, 5, 2, 3, 33, 2, 8, 10];
console.log(quickSort(arrQuickSort));