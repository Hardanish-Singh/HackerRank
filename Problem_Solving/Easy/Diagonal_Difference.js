/****************************************************************
*               HACKERRANK DIAGONAL DIFFERENCE CHALLENGE	*
*                                                               *
* Given a square matrix, calculate the absolute difference      *
* between the sums of its diagonals. For example, the square    *
* matrix arr = [ [ 1, 2, 3], [4, 5, 6], [7, 8, 9] ]             *
*                                                               *
* The left-to-right diagonal = 1 + 5 + 9 = 15                   *
* The right to left diagonal = 3 + 5 + 9 = 17                   *
* Their absolute difference is | 15 - 17 | = 2                  *
*                                                               *
* Function description                                          *
* Complete the diagonalDifference in editor below               *
*                                                               *
* Input Format                                                  *
* 1) The first line contains a single integer, n, the number of *
*    rows and columns in the square matrix arr.                 *
* 2) Each of the next n lines describes a row, arr[i],          *
*    and consists of n space-separated integers arr[i][j].      *
*                                                               *
* Constraints                                                   *
* 1) -100 <= arr[i][j] <= 100                                   *
*                                                               *
* Input 1:                                                      *
*               3                                               *
*               11   2   4                                      *
*               4    5   6                                      *
*               10   8   -12                                    *
* Output 1:                                                     *
*               15                                              *
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

// Complete the 'diagonalDifference' function below.

function diagonalDifference( arr ) {
        var leftToRightDiagonal = 0;
        var rightToLeftDiagonal = 0;
        var row1 = 0;
        var column1 = 0;
        var row2 = 0;
        var column2 = arr[row2].length - 1;

        while( row1 <= arr.length - 1 ) {
                leftToRightDiagonal += arr[row1++][column1++];
                rightToLeftDiagonal += arr[row2++][column2--];
        }

        return Math.abs( leftToRightDiagonal - rightToLeftDiagonal );
}

function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const n = parseInt(readLine().trim(), 10);
        let arr = Array(n);
        for (let i = 0; i < n; i++) {
                arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        }
        const result = diagonalDifference(arr);
        ws.write(result + '\n');
        ws.end();
}
