//
// sub-list before key is sorted
//
const insertionSort = (arr) => {
    let len = arr.length;

    for(let i = 1; i < len; i++) {
        let key = arr[i];                       // current key
        let j = i - 1;                          // last element of sorted sub-list
        
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];                // swap
            j = j - 1;                          // iterate through sub-list
        }

        arr[j + 1] = key;                       // next key is right of the biggest value in sub-list
    }

    return console.log('\nsort result: ', arr, "\n");
}

insertionSort([5, 1, 2, -3, -4, 5, -5, 10, 23, -23]);
