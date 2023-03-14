// Hackerrrank: https://www.hackerrank.com/challenges/missing-numbers/

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

const missingNumbers = (arr, brr) => {
        let frequencyList1 = {};
        let frequencyList2 = {};
        let missingNumbers = [];

        for (let i = 0; i < arr.length; i++) {
                arr[i] in frequencyList1 ? (frequencyList1[arr[i]] += 1) : (frequencyList1[arr[i]] = 1);
        }

        for (let i = 0; i < brr.length; i++) {
                brr[i] in frequencyList2 ? (frequencyList2[brr[i]] += 1) : (frequencyList2[brr[i]] = 1);
        }

        for (const [key1, value1] of Object.entries(frequencyList2)) {
                let isFound = false;
                for (const [key2, value2] of Object.entries(frequencyList1)) {
                        if (key1 === key2) {
                                isFound = true;
                                value1 > value2 ? missingNumbers.push(key1) : null;
                                break;
                        }
                }
                !isFound ? missingNumbers.push(key1) : null;
        }

        return missingNumbers;
};

const main = () => {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const n = parseInt(readLine().trim(), 10);
        const arr = readLine()
                .replace(/\s+$/g, "")
                .split(" ")
                .map((arrTemp) => parseInt(arrTemp, 10));
        const m = parseInt(readLine().trim(), 10);
        const brr = readLine()
                .replace(/\s+$/g, "")
                .split(" ")
                .map((brrTemp) => parseInt(brrTemp, 10));
        const result = missingNumbers(arr, brr);
        ws.write(result.join(" ") + "\n");
        ws.end();
};
