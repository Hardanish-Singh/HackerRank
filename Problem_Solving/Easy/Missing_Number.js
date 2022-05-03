/****************************************************************
*               HACKERRANK MISSING NUMBER CHALLENGE	        *
*                                                               *
* Given two arrays of integers, find which elements in the      *
* second array are missing from the first array.                *
*                                                               *
* For Example: arr = [7, 2, 5, 3, 5, 3],                        *
*              brr = [7, 2, 5, 4, 6, 3, 5, 3]                   *
* Then, missing numbers are [4, 6]                              *
*                                                               *
* Notes:                                                        *
* 1) If a number occurs multiple times in the lists, you must   *
*    ensure that the frequency of that number in both lists is  *
*    the same. If that is not the case, then it is also a       *
*    missing number.                                            *
* 2) Return the missing numbers sorted ascending.               *
* 3) Only include a missing number once, even if it is missing  *
*    multiple times.                                            *
* 4) The difference between the maximum and minimum numbers in  *
*    the original list is less than or equal to 100             *
*                                                               *
* Function Description: Complete the missingNumbers function in *
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
*                                                               *
* Input 1:                                                      *
*               2                                               *
*               3                                               *
*               1 2 3                                           *
*               4                                               *
*               1 2 3 3                                         *
* Output 1:                                                     *
*               NO                                              *
*               YES                                             *
* Explanation:                                                  *
*       For the first test case, no such index exists.          *
*       For the second test case, arr[0] + arr[1] = arr[3],     *
*               therefore index 2 satisfies the given condition *
*                                                               *
* Input 2:                                                      *
*               3                                               *
*               5                                               *
*               1 1 4 1 1                                       *
*               4                                               *
*               2 0 0 0                                         *
*               4                                               *
*               0 0 2 0                                         *
* Output 2:                                                     *
*               YES                                             *
*               YES                                             *
*               YES                                             *
* Explanation:                                                  *
*       For first test case, arr[2] = 4 is between two subarray *
*               summing to 2.                                   *
*       For second test case, arr[0] = 2 is between two         *
*               subarrays summing to 0                          *
*       For third test case, arr[2] = 2 is between two          *
*               subarrays summing to 0                          *
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

function missingNumbers( arr, brr ) {
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