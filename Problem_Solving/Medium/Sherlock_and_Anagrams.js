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
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */


function sherlockAndAnagrams( s ) {
    // let hash_table = { 
        
    // };
    // let count = 0;
    // for( let i = 0; i < s.length; i++ ) {
    //     for ( let j = i; j < s.length; j++ ) {
    //         let temp = s.slice(i, j+1).split("").sort().join("");
    //         if( hash_table[temp] ) {
    //             count += hash_table[temp];
    //             hash_table[temp] = hash_table[temp] + 1;
    //         } else {
    //             hash_table[ temp ] = 1;
    //         }
    //     } 
    // }
    // return count;
    
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
