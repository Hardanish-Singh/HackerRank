'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus( arr ) {
    var minus = 0;
    var plus = 0;
    var zeros = 0;
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] < 0 ) {
            minus++;
        } else if( arr[i] > 0 ) {
            plus++;
        } else {
            zeros++;
        }
    }
    console.log( plus/arr.length );
    console.log( minus/arr.length );
    console.log( zeros/arr.length );
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
