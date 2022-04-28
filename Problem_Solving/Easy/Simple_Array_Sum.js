/****************************************************************
*               HACKERRANK SIMPLE ARRAY SUM CHALLENGE	        *
*                                                               *
* Given an array of integers, find the sum of its elements.     *
* For example, if the array arr = [1, 2, 3], so return 6        *
*                                                               *
****************************************************************/

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
 * @param { number[] } arr
 * @return { number }
*/

// Complete the 'simpleArraySum' function below.

function simpleArraySum( arr ) {
        return arr.reduce( (previousValue, currentValue) => previousValue + currentValue );
}

function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const arCount = parseInt(readLine().trim(), 10);
        const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
        const result = simpleArraySum(ar);
        ws.write(result + '\n');
        ws.end();
}
