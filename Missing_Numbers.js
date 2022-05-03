'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    var frequencyList1 = { };
    var frequencyList2 = { };
    var missingNumbers = [];
    for( let i = 0; i < arr.length; i++ ) {
        arr[i] in frequencyList1 ? frequencyList1[ arr[ i ] ] += 1 : frequencyList1[ arr[ i ] ] = 1;
    }
    for( let i = 0; i < brr.length; i++ ) {
        brr[i] in frequencyList2 ? frequencyList2[ brr[ i ] ] += 1 : frequencyList2[ brr[ i ] ] = 1;
    }
    
    for( const[ key1, value1 ] of Object.entries( frequencyList2 ) ) {
        let isFound = false;
        for( const[ key2, value2 ] of Object.entries( frequencyList1 ) ) {
            if( key1 === key2 ) {
                isFound = true;
                value1 > value2 ? missingNumbers.push( key1 ) : null;
                break;
            }
        }
        !isFound ? missingNumbers.push( key1 ) : null;
    }
    return missingNumbers;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine().trim(), 10);

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
