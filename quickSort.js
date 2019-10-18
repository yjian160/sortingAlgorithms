const partition = (arr, low, high) => {
  var pivot = arr[high];

  var i = low - 1;

  for (var j = low; j < high; j++) {

    if (arr[j] < pivot) {
      i++;
      var temp = arr[j]
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  var temp = arr[i+1];
  arr[i+1] = arr[high];
  arr[high] = temp;

  return i+1;
}

const quickSort = (arr, low = 0, high = arr.length-1) => {
  if (low < high) {
    var mid = partition(arr, low, high);
    quickSort(arr, low, mid-1);
    quickSort(arr, mid+1, high);
  }

  return arr;
}