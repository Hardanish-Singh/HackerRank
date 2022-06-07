/****************************************************************
*               HACKERRANK THE GRID SEARCH CHALLENGE	        *
*                                                               *
* Given an array of strings of digits, try to find the          *
* occurrence of a given pattern of digits. In the grid and      *
* pattern arrays, each string represents a row in the grid.     *
* For example, consider the following grid array:               *
*               1234567890                                      * 
*               0987654321                                      *
*               1111111111                                      *
*               1111111111                                      *
*               2222222222                                      *
*                                                               *
* The pattern array is:                                         *
*               876543                                          * 
*               111111                                          *
*               111111                                          *
*                                                               *
* The pattern begins at the second row and the third column of  *
* the grid and continues in the following two rows. The pattern *
* is said to be present in the grid. The return value should be *
* YES or NO, depending on whether the pattern is found.         *
* In this case, return YES.                                     *
*                                                               *
* Function Description:                                         *
* Complete the gridSearch function in the editor below. It      *
* should return YES if the pattern exists in the grid, or NO    *
* otherwise. gridSearch has the following parameter(s):         *
* 1) string G[R]: the grid to search                            *
* 2) string P[r]: the pattern to search for                     *
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
 * Complete the 'gridSearch' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY G
 *  2. STRING_ARRAY P
 */

function checkIfPatterExists( grid, row, column, pattern ) {
        for( let i = 0; i < pattern.length; i++ ) {
                let sliceString = grid[row].slice( column, column + pattern[0].length );
                if( pattern[ i ] !== sliceString ) {
                        return false;
                }
                row++;
        }
        return true;
}

function gridSearch(G, P) {
        for( let i = 0; i < G.length; i++ ) {
                for( let j = 0; j < G[i].length; j++ ) {
                        if( G[i][j] === P[0][0] && checkIfPatterExists( G, i, j, P ) ) {
                                return "YES";
                        }
                }
        }
        return "NO";
}

function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const t = parseInt(readLine().trim(), 10);
        for (let tItr = 0; tItr < t; tItr++) {
                const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
                const R = parseInt(firstMultipleInput[0], 10);
                const C = parseInt(firstMultipleInput[1], 10);
                let G = [];
                for (let i = 0; i < R; i++) {
                        const GItem = readLine();
                        G.push(GItem);
                }
                const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
                const r = parseInt(secondMultipleInput[0], 10);
                const c = parseInt(secondMultipleInput[1], 10);
                let P = [];

                for (let i = 0; i < r; i++) {
                        const PItem = readLine();
                        P.push(PItem);
                }
                const result = gridSearch(G, P);
                ws.write(result + '\n');
        }
        ws.end();
}
