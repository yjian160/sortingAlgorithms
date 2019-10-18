const insertionSort = (arr) => {

  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    var j = i - 1;
    while(j >= 0 && arr[j] > current[i]) {
      arr[j+1] = arr[j];
      j--; 
    }
    arr[j] = currentVal;
  }

  return arr;
}