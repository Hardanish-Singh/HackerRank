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
* 1) The first line contains, n - the size of the first array   *
* 2) The next line contains n space-separated integers arr[i]   *
* 3) The first line contains, m - the size of the second array  *
* 4) The next line contains m space-separated integers brr[i]   *
*                                                               *
* Constraints                                                   *
* 1) 1 <= n, m <= 2 * 10 ^ 5                                    *
* 2) n <= m                                                     *
* 3) 1 <= brr[i] <=  10 ^ 4                                     *
* 4) max(brr) - min(brr) <= 100                                 *
*                                                               *
* Input 1:                                                      *
*           10                                                  *
*           203 204 205 206 207 208 203 204 205 206             *
*           13                                                  *
*           203 204 204 205 206 207 205 208 203 206 205 206 204 *
* Output 1:                                                     *
*           204 205 206                                         *
* Explanation:                                                  *
*           204 is present in both arrays. Its frequency in arr *
*           is 2, while its frequency in brr is 3. Similarly,   *
*           205 and 206 occur twice in arr, but three times in  *
*           brr. The rest of the numbers have the same          *
*           frequencies in both lists.                          *
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
 * @param { number[] } brr
 * @returns { number[] }
*/

//Complete the 'missingNumbers' function below.

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