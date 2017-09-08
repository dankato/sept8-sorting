// Sorting

// Swap
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
return array;
}

let array = ['banana', 'apple', 'pineapple', 'orange', 'pear'];
let numberArray = [2, 6, 4, 9, 0];
// console.log(swap(array, 0, 2));

// // Bubble Sort
function bubbleSort(array) {
    let swaps = 0;
    for (let i=0; i<array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

// console.log(bubbleSort(array));
// console.log(bubbleSort(numberArray));

// Merge sort
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

// 

