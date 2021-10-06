const fs = require('fs');

const path = './bugtrk.in.txt'

if (fs.existsSync(path)) {
    console.log('Read file started!');
    var data = fs.readFileSync(path, 'utf8').split(' ');
    console.log('Read file succses!');
} else {
    console.log('File does not exists at path: ', path);
}

const N = data[0]; // Number of rectangles
const W = data[1]; // Width
const H = data[2]; // Height

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

const res = findSquare(N, W, H);
console.log('File write started!');
fs.writeFile('bugtrk.out.txt', res.toString(), (err) => {
    if(err) throw err;
    console.log('The file has been saved!');
});

module.exports = findSquare;