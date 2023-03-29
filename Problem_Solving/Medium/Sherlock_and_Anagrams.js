// Hackerrrank: https://www.hackerrank.com/challenges/sherlock-and-anagrams

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

const sherlockAndAnagrams = (s) => {
        let hash_table = {};
        let count = 0;
        for (let i = 0; i < s.length; i++) {
                for (let j = i; j < s.length; j++) {
                        let temp = s
                                .slice(i, j + 1)
                                .split("")
                                .sort()
                                .join("");
                        if (hash_table[temp]) {
                                count += hash_table[temp];
                                hash_table[temp] = hash_table[temp] + 1;
                        } else {
                                hash_table[temp] = 1;
                        }
                }
        }
        return count;
};

const main = () => {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const q = parseInt(readLine().trim(), 10);
        for (let qItr = 0; qItr < q; qItr++) {
                const s = readLine();
                const result = sherlockAndAnagrams(s);
                ws.write(result + "\n");
        }
        ws.end();
};
