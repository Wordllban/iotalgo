const selectionSort = (arr) => {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        // Finding the smallest number in the sub-list
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        
        if(min != i) {
            // Swaping the elements
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    
    return console.log("\nsort result: ", arr, "\n");
}

selectionSort([5, 3, 2, 1, 4]);