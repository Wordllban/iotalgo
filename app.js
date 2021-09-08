function heapifyMax(arr, length, i, counter = { comparisons: 0, swaps: 0, executionTime: 0 }) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;


    counter.comparisons++;
    if (left < length) {
        counter.comparisons++; //for next 'if'
        if(arr[left] > arr[largest]) {
            largest = left;
        }
    }

    counter.comparisons++;
    if (right < length) {
        counter.comparisons++; //for next 'if'
        if(arr[right] > arr[largest]) {
            
            largest = right;
        }
    }

    if(largest != i) {
        counter.swaps++;
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyMax(arr, length, largest, counter);
    }
}

function heapifyMin(arr, length, i, counter = { comparisons: 0, swaps: 0, executionTime: 0 }) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;


    counter.comparisons++;
    if (left < length) {
        counter.comparisons++; //for next 'if'
        if(arr[left] < arr[largest]) {
            largest = left;
        }
    }

    counter.comparisons++;
    if (right < length) {
        counter.comparisons++; //for next 'if'
        if(arr[right] < arr[largest]) {
            
            largest = right;
        }
    }

    if(largest != i) {
        counter.swaps++;
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyMin(arr, length, largest, counter);
    }
}

function heapSort(arr, sortOrder = "asc") {
    const startTime = performance.now();
    let length = arr.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;
    
    let counter = {
        comparisons: 0, 
        swaps: 0 
    }
    if(sortOrder === "asc" ) {
        while (i >= 0) {
            heapifyMax(arr, length, i, counter);
            i--;
        }
    
        while (k >= 0) {
            counter.swaps++;
            [arr[0], arr[k]] = [arr[k], arr[0]];
            heapifyMax(arr, k, 0, counter);
            k--;
        }
    } else if (sortOrder === "desc") {
        while (i >= 0) {
            heapifyMin(arr, length, i, counter);
            i--;
        }
    
        while (k >= 0) {
            counter.swaps++;
            [arr[0], arr[k]] = [arr[k], arr[0]];
            heapifyMin(arr, k, 0, counter);
            k--;
        }
    } else {
        console.log("Wrong sort order")
    }
    
    
    const endTime = performance.now();
    counter.executionTime = endTime - startTime
    console.log("HeapSort")
    console.log("Sorted Array:", ...arr);
    
    return arr, counter;
}
let arr = [4, 2, 9, 7, 1, 3, 8, 0, 5, 6];
let counter = heapSort(arr);
console.log("counters:", counter);