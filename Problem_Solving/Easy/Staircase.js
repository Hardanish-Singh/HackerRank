// Hackerrrank: https://www.hackerrank.com/challenges/staircase/

"use strict";

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

const staircase = (n) => {
        var spaces = n - 1;
        var hash = 1;
        for (let i = 1; i <= n; i++) {
                // Spaces loop
                for (let j = 1; j <= spaces; j++) {
                        process.stdout.write(" ");
                }
                // Hash Loop
                for (let j = 1; j <= hash; j++) {
                        process.stdout.write("#");
                }
                console.log();
                spaces--;
                hash++;
        }
};

const main = () => {
        const n = parseInt(readLine().trim(), 10);
        staircase(n);
};
