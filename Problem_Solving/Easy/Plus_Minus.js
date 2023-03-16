//  Hackerrrank: https://www.hackerrank.com/challenges/plus-minus

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => (inputString += inputStdin));

process.stdin.on("end", () => {
        inputString = inputString.split("\n");
        main();
});

const readLine = () => inputString[currentLine++];

const plusMinus = (arr) => {
        let minus = 0;
        let plus = 0;
        let zeros = 0;
        for (let i = 0; i < arr.length; i++) {
                if (arr[i] < 0) {
                        minus++;
                } else if (arr[i] > 0) {
                        plus++;
                } else {
                        zeros++;
                }
        }
        console.log(plus / arr.length);
        console.log(minus / arr.length);
        console.log(zeros / arr.length);
};

const main = () => {
        const n = parseInt(readLine().trim(), 10);
        const arr = readLine()
                .replace(/\s+$/g, "")
                .split(" ")
                .map((arrTemp) => parseInt(arrTemp, 10));
        plusMinus(arr);
};
