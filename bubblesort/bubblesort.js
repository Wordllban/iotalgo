let bubbleSort = (arr) => {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if(arr[i] > arr[i + 1]) {
                let tmp = arr[i + 1];   // store var to swap
                arr[i] = arr[i + 1];    // swap
                arr[i + 1] = tmp;       // swap
                swapped = true;
            } 
        }
    } while(swapped);
    console.log(arr);
    return arr;
}
console.log("");
console.log("sort result: ");
bubbleSort([2, 3, 5, 4, 1])
console.log("");