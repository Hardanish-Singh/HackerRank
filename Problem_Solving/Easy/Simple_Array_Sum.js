// Hackerrrank: https://www.hackerrank.com/challenges/simple-array-sum/

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

const simpleArraySum = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue);

const main = () => {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const arCount = parseInt(readLine().trim(), 10);
        const ar = readLine()
                .replace(/\s+$/g, "")
                .split(" ")
                .map((arTemp) => parseInt(arTemp, 10));
        const result = simpleArraySum(ar);
        ws.write(result + "\n");
        ws.end();
};
