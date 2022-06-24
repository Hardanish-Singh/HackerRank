/****************************************************************
*          HACKERRANK SHERLOCK AND ANAGRAMS CHALLENGE	        *
*                                                               *
* Two strings are anagrams of each other if the letters of one  *
* string can be rearranged to form the other string. Given a    *
* string, find the number of pairs of substrings of the string  *
* that are anagrams of each other.                              *
*                                                               *
* For example, s = "mom"                                        *
* The list of all anagrammatic pairs is [m, m], [mo, om] at     *
* positions [ [0], [2] ], [ [0, 1], [1, 2] ] respectively       *
*                                                               *
* Function Description:                                         *
* Complete the function sherlockAndAnagrams in the editor below *
* sherlockAndAnagrams has the following parameter(s):           *
* Input:                                                        *
*           1) string s:                                        *
* Returns:                                                      *
*           1) int                                              *
*                                                               *
* HackerRank Problem URL:                                       *
* https://www.hackerrank.com/challenges/sherlock-and-anagrams   *
*                                                               *
****************************************************************/

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

/** 
 * @param { string } s
 * @returns { number }
*/

// Complete the 'sherlockAndAnagrams' function below.

function sherlockAndAnagrams( s ) {

        // SOLUTION 1
        let hash_table = { 

        };
        let count = 0;
        for( let i = 0; i < s.length; i++ ) {
                for ( let j = i; j < s.length; j++ ) {
                        let temp = s.slice(i, j+1).split("").sort().join("");
                        if( hash_table[temp] ) {
                                count += hash_table[temp];
                                hash_table[temp] = hash_table[temp] + 1;
                        } else {
                                hash_table[ temp ] = 1;
                        }
                }
        }
        return count;
        
        /*
                // SOLUTION 2
                let hash_table = { 

                };
                let count = 0;
                for( let i = 0; i < s.length; i++ ) {
                        for ( let j = i; j < s.length; j++ ) {
                                let temp = s.slice(i, j+1).split("").sort().join("");
                                if( hash_table[temp] ) {
                                        hash_table[temp] = hash_table[temp] + 1;
                                } else {
                                        hash_table[ temp ] = 1;
                                }
                        } 
                }
                for( const[ key, value ] of Object.entries( hash_table ) ) {
                        if( value <= 1 ) {
                                continue;
                        } else {
                                count += ( ( value * ( value - 1 ) ) / 2 )
                        }
                }
                return count;
        */
}

function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
        const q = parseInt(readLine().trim(), 10);
        for (let qItr = 0; qItr < q; qItr++) {
                const s = readLine();
                const result = sherlockAndAnagrams(s);
                ws.write(result + '\n');
        }
        ws.end();
}