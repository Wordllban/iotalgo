// check if side x of square X can pack all N rectangles or not
function bound(w, h, N, x) {   
    let pack = parseInt(x / w) * parseInt(x / h);

    if (pack >= N)
        return true;
    else
        return false;
}

function findSquare(N, W, H) {
    // lower bound
    let i = 1;

    // upper bound
    let j = W * H * N;

    while (i < j) {    
        // Calculate the mid value
        let mid = i + parseInt((j - i) / 2);

        // If the current size of square can contain N rectangles
        if (bound(W, H, N, mid))
            j = mid;
        else
            i = mid + 1;
    }

    return j;
}
