
function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(array1, array2) {
  let sorted = [];
  while (array1.length !== 0 && array2.length !== 0) {
    if (array1[0] > array2[0]) {
      let min = findMinAndRemoveSorted(array1);
      sorted.push(min)
    } else {
      let min = findMinAndRemoveSorted(array2);
      sorted.push(min)
    }
  }
  return sorted.concat(array1).concat(array2)
}

function mergeSort(array) {
  
}