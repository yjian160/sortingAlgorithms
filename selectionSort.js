const selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    var temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}