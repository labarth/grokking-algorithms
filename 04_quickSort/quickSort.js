const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const more = [];
  const less = [];
  const support = arr[0];

  for (let i = 1; i < arr.length; i++) {
    (arr[i] > support) ? more.push(arr[i]) : less.push(arr[i]);
  }

  return quickSort(less).concat(support).concat(quickSort(more));
}

const arrQuickSort = [10, 5, 2, 3, 33, 2, 8, 10];
console.log(quickSort(arrQuickSort));