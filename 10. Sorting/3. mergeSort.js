

let arr = [12, 75, 34, 21, 33, 9, 45, 17];


function merge(arr, l, mid, r) {
    let n1 = mid - l + 1;
    let n2 = r - mid;

    // Create temporary arrays
    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    // Copy data to temporary arrays leftArray[] and rightArray[]
    for (let i = 0; i < n1; ++i) {
        leftArray[i] = arr[l + i];
    }
    for (let j = 0; j < n2; ++j) {
        rightArray[j] = arr[mid + 1 + j];
    }

    // Merge the temporary arrays back into arr[l..r]
    let i = 0; // Initial index of first subarray
    let j = 0; // Initial index of second subarray
    let k = l; // Initial index of merged subarray

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of leftArray[], if there are any
    while (i < n1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    // Copy the remaining elements of rightArray[], if there are any
    while (j < n2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
} 


function mergeSort(arr, l, r) { 
    if(l === r) {
        return; 
    } 
    let mid = Math.floor((l+r)/2); 
    mergeSort(arr, l, mid); 
    mergeSort(arr, mid+1, r); 
    merge(arr, l, mid, r); 
} 

mergeSort(arr, 0, arr.length-1); 


// [12, 75, 34, 21, 33, 9, 45, 17];

arr; 










