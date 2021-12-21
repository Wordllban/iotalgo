const merge = (left, right) => {
    let arr = [];
    
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right]
}

const mergeSort = (arr) => {
    const half = arr.length / 2;
    
    if(arr.length < 2) {
        return arr;
    }

    const left = arr.splice(0, half);
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
} 

console.log("\nsort result: ", mergeSort([5, 2, 3, 1, 7, 6]), "\n");
