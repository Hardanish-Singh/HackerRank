// Hackerrrank: https://www.hackerrank.com/challenges/diagonal-difference/problem

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
        inputString += inputStdin;
});

process.stdin.on("end", function () {
        inputString = inputString.split("\n");
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

function diagonalDifference(arr) {
        var leftToRightDiagonal = 0;
        var rightToLeftDiagonal = 0;
        var row1 = 0;
        var column1 = 0;
        var row2 = 0;
        var column2 = arr[row2].length - 1;

        while (row1 <= arr.length - 1) {
                leftToRightDiagonal += arr[row1++][column1++];
                rightToLeftDiagonal += arr[row2++][column2--];
        }

        return Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
}

function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const n = parseInt(readLine().trim(), 10);
        let arr = Array(n);
        for (let i = 0; i < n; i++) {
                arr[i] = readLine()
                        .replace(/\s+$/g, "")
                        .split(" ")
                        .map((arrTemp) => parseInt(arrTemp, 10));
        }
        const result = diagonalDifference(arr);
        ws.write(result + "\n");
        ws.end();
}
