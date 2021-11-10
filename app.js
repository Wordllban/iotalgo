const str = '101101101';
const number = 5;

export let binaryNumbersArray = [];

// convert all number^x to binary 
export function createBinaryArray(number) {
    let i = 0;                                  // 
    let binaryNumber = "";                      // number converted to binary

    while (binaryNumber.length <= str.length) {
        let powItem = Math.pow(number, i);      // exponentiation number
        binaryNumber = powItem.toString(2);
        binaryNumbersArray.push(binaryNumber)
        i++;
    }
}

export function findMinDivides(str) {
    let startIndex = 1;
    let strArray = str.split('');

    let diviceCount = 0;
    
    while (startIndex <= strArray.length) {
    // if there is a match
        if(binaryNumbersArray.includes(strArray.slice(0, startIndex).join(''))) {
            // if the whole string matches powered number, the minimum number of dividing is 1
            if(startIndex == strArray.length)
                return 1
            
            let rightDivideCount = findMinDivides(str.slice(startIndex));

            // otherwise check if right part can be divided and assign
            if(rightDivideCount !== 0) {
                if(diviceCount == 0 || diviceCount > rightDivideCount + 1)
                    diviceCount = rightDivideCount + 1;
            }
        }
        startIndex++;
    }

    return diviceCount;
}

createBinaryArray(number)
console.log(binaryNumbersArray);
console.log(findMinDivides(str));

// const last = binaryNumbersArray.pop();
// console.log(binaryNumbersArray);
