/****************************************************************
*               HACKERRANK STAIRCASE CHALLENGE	                *
*                                                               *
* This is a staircase of size n = 4                             *
*                                                               *
*                       #                                       *
*                      ##                                       *
*                     ###                                       *
*                    ####                                       *
*                                                               *
* Its base and height are both equal to n, It is drawn using #  *
* symbols & spaces. The last line is not preceded by any spaces *
* Write a program that prints a staircase of size n             *
*                                                               *
* Function Description: Complete the staircase function in the  *
* editor below. staircase has the following parameter(s): int n *
*                                                               *
* Print                                                         *
* Print a staircase as described above.                         *
*                                                               *
* Input Format                                                  *
* 1) A single integer, n, denoting the size of the staircase.   *
*                                                               *
* Constraints                                                   *
* 1) 0 <= n <= 100                                              *
*                                                               *
* Input 1:                                                      *
*           6                                                   *
* Output 1:                                                     *
*                       #                                       *
*                      ##                                       *
*                     ###                                       *
*                    ####                                       *
*                   #####                                       *
*                  ######                                       *
*                                                               *
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
 * @param { number } n
 * @returns { }
*/

// Complete the 'staircase' function below.

function staircase( n ) {
        var spaces = n - 1;
        var hash = 1;
        for( let i = 1; i <= n; i++ ) {
                // Spaces loop
                for( let j = 1; j <= spaces; j++ ) {
                        process.stdout.write(" ");
                }
                // Hash Loop
                for( let j = 1; j <= hash; j++ ) {
                        process.stdout.write("#");
                }
                console.log();
                spaces--;
                hash++;
        }
}

function main() {
        const n = parseInt(readLine().trim(), 10);
        staircase(n);
}