/****************************************************************
*               HACKERRANK SIMPLE ARRAY SUM CHALLENGE	        *
*                                                               *
* Given an array of integers, find the sum of its elements.     *
* For example, if the array arr = [1, 2, 3], so return 6        *
*                                                               *
* Function Description                                          *
* Complete the simpleArraySum function in the editor below.     *
* It must return the sum of the array elements as an integer.   *
* function simpleArraySum has the following parameter(s):       *
* arr: an array of integers                                     *
*                                                               *
* Input Format                                                  *
* 1) The first line contains integer, n, denoting the size of   *
*    the array                                                  *
* 2) The second line contains n space-separated integers        *
*    representing the array's elements.                         *
*                                                               *
* Constraints                                                   *
* 1) 0 < n, arr[i] <= 1000                                      *
*                                                               *
* Output Format                                                 *
* Print the sum of the array's elements as a single integer.    *
*                                                               *
* Input 1:                                                      *
*               6                                               *
*               1 2 3 4 10 11                                   *
* Output 1:                                                     *
*               31                                              *
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

/**
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
