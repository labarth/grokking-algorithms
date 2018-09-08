const quickSort = (arr) => {
  if (arr.length < 2) return arr;
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
}

// const arrQuickSort = [8,3,22,37,10,15,44,99,36,46,95,34,56,67,2];
// quickSort(arrQuickSort);