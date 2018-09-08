const maxIdx = (arr) => {
  let max = { views: 0 };

  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].views > max.views) {
      max = arr[i];
      idx = i;
    }
  }
  return idx;
}

const selectionSort = (arr) => {
  const newArr = [];

  for (let i = arr.length; i > 0; i--) {
    let index = maxIdx(arr);
    newArr.push(arr[index]);
    arr.splice(index, 1);
  }

  return newArr;
}

// const arrSort = [
//   { name: 'wilco', views: 111 },
//   { name: 'Radio head', views: 156 },
//   { name: 'the black keys', views: 35 },
//   { name: 'Kishore kumar', views: 141 },
//   { name: 'the strokes', views: 61 },
//   { name: 'neutral milk hotel', views: 94 },
//   { name: 'beck', views: 88 },
// ];
// selectionSort(arrSort);
