const recursiveMax = (arr) => {
 if (arr.length === 1) return arr[0];
 let temp = 0;

 if (arr[0] > arr[1]) {
   temp = arr[0];
   arr[0] = arr[1];
   arr[1] = temp;
 }

 return recursiveMax(arr.slice(1));
}

//console.log(recursiveMax([2,13,15,29,2]));