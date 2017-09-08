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

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
// base case
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i=leftIndex; i<left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i=rightIndex; i<right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

// console.log(mergeSort([2,1,4,3,5,6,7]));
// console.log(merge([1,2,3,4,5,6,7], [8, 9, 10], []));


// Quicksort

function quickSort(array, start=0, end=array.length) {
    start = start;
    end = end;
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i=start; i<end - 1; i++) {
console.log(j);
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};
let arraySort = [7,4,3,2,8,1]
// console.log(quickSort(arraySort));

// Interview Questions

// High & Low
let bacon = [3,6,2,1,4,5];
let low = 1;
let high = 6;

function highLow(array, low, high) {

	let heidi = 0;

	for(let i = 0; i < array.length - 1; i++) {
		if(array[i] > array[i + 1]) {
			swap(array, i, i + 1);
			heidi++;
		}
	}
	if(heidi > 0) {
		return highLow(array);
	}
	return array;
};

console.log(highLow(bacon));

// Random Shuffle

const superArray = ['q', 'w', 'e', 'r', 't', 'y'];
//function randomArray (array) {
	
//}








