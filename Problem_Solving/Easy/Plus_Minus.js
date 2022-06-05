/****************************************************************
*               HACKERRANK PLUS MINUS CHALLENGE	                *
*                                                               *
* Given an array of integers, calculate the ratios of its       *
* elements that are positive, negative, and zero. Print the     *
* decimal value of each fraction on a new line with 6 places    *
* after the decimal.                                            *
*                                                               *
* Note: This challenge introduces precision problems. The test  *
* cases are scaled to six decimal places, though answers with   *
* absolute error of up to 10^-4 are acceptable.                 *
*                                                               *
* For Example: arr = [1, 1, 0, -1, -1], There are n = 5 elements*
* two positive, two negative and one zero. Their ratios are     *
* 2 / 5 = 0.400000, 2 / 5 = 0.400000, 1 / 5 = 0.200000          *
****************************************************************/

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

/**
 * @param { number[] } arr
 * @return { void }
*/

// Complete the 'plusMinus' function below.

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
        console.log( plus / arr.length );
        console.log( minus / arr.length );
        console.log( zeros / arr.length );
}

function main() {
        const n = parseInt(readLine().trim(), 10);
        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        plusMinus(arr);
}
