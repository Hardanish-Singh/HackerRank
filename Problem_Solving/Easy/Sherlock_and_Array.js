/****************************************************************
*               HACKERRANK SHERLOCK AND ARRAY CHALLENGE	        *
*                                                               *
* Watson gives Sherlock an array of integers. His challenge is  *
* to find an element of the array such that the sum of all      *
* elements to the left is equal to the sum of all elements to   *
* the right.                                                    *
*                                                               *
* For Example: arr = [5, 6, 8, 11], 8 is between two subarrays  *
* that sum to 11.                                               *
*                                                               *
* For Example: arr[1], The answer is [1] since left & right sum *
* to 0.                                                         *
*                                                               *
* You will be given arrays of integers & must determine whether *
* there is an element that meets the criterion.                 *
* If there is, return YES. Otherwise, return NO.                *
*                                                               *
* Function Description: Complete the balancedSums function in   *
* the editor below.                                             *
*                                                               *
* Input Format                                                  *
* 1) The first line contains T, the number of test cases.       *
* 2) The next T pairs of lines each represent a test case.      *
*       2a) The first line contains n, the number of elements   *
*           in the array arr.                                   *
*       2b) The second line contains n space-separated integers *
*           arr[i] where 0 <= i < n                             *
*                                                               *
* Constraints                                                   *
* 1) 1 <= T <= 10                                               *
* 2) 1 <= n <= 10^5                                             *
* 3) 1 <= arr[i] <= 2 * 10^4                                    *
* 4) 0 <= i < n                                                 *
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
 * @return { string }
*/

// Complete the 'balancedSums' function below.

function balancedSums( arr ) {
        var leftSum = 0;
        var rightSum = arr.slice( 1 ).reduce( (a, b) => a + b, 0);
        var flag = "NO";
        for( let i = 1; i <= arr.length; i++ ) {
                if( leftSum === rightSum ) {
                        flag = "YES";
                        break;
                }
                leftSum += arr[ i - 1 ];
                rightSum -= arr[ i ];
        }
        return flag;
}

function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const T = parseInt(readLine().trim(), 10);
        for (let TItr = 0; TItr < T; TItr++) {
                const n = parseInt(readLine().trim(), 10);
                const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
                const result = balancedSums(arr);
                ws.write(result + '\n');
        }
        ws.end();
}
