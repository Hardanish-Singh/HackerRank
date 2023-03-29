// Hackerrrank: https://www.hackerrank.com/challenges/the-grid-search/

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

const checkIfPatterExists = (grid, row, column, pattern) => {
        for (let i = 0; i < pattern.length; i++) {
                let sliceString = grid[row].slice(column, column + pattern[0].length);
                if (pattern[i] !== sliceString) {
                        return false;
                }
                row++;
        }
        return true;
};

const gridSearch = (G, P) => {
        for (let i = 0; i < G.length; i++) {
                for (let j = 0; j < G[i].length; j++) {
                        if (G[i][j] === P[0][0] && checkIfPatterExists(G, i, j, P)) {
                                return "YES";
                        }
                }
        }
        return "NO";
};

const main = () => {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const t = parseInt(readLine().trim(), 10);
        for (let tItr = 0; tItr < t; tItr++) {
                const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
                const R = parseInt(firstMultipleInput[0], 10);
                const C = parseInt(firstMultipleInput[1], 10);
                let G = [];
                for (let i = 0; i < R; i++) {
                        const GItem = readLine();
                        G.push(GItem);
                }
                const secondMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
                const r = parseInt(secondMultipleInput[0], 10);
                const c = parseInt(secondMultipleInput[1], 10);
                let P = [];

                for (let i = 0; i < r; i++) {
                        const PItem = readLine();
                        P.push(PItem);
                }
                const result = gridSearch(G, P);
                ws.write(result + "\n");
        }
        ws.end();
};
