const mergeSort = (arr) => {

  if (arr.length <= 1) {
    return arr;
  }

  var midpoint = Math.floor(arr.length/2);
  var leftArray = mergeSort(arr.slice(0, midpoint));
  var rightArray = mergeSort(arr.slice(midpoint, arr.length));

  var newArray = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] <= rightArray[0]) {
      newArray.push(leftArray.shift());
    } else {
      newArray.push(rightArray.shift());
    }
  }

  while (leftArray.length > 0) {
    newArray.push(leftArray.shift());
  }

  while (rightArray.length > 0) {
    newArray.push(rightArray.shift()); 
  }

  return newArray;
}