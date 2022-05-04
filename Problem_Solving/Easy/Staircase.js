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