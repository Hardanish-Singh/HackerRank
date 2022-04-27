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
 * @return { string } flag
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
