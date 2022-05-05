#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'gridlandMetro' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER m
#  3. INTEGER k
#  4. 2D_INTEGER_ARRAY track
#

def gridlandMetro(n, m, k, track):
        dictionary = {}
        add = 0
        for i in range( 0, len( track ) ):                
                r, c1, c2 = track[i]

                if( r not in dictionary ):
                        dictionary[r] = f'{ str( min(c1, c2) ) } - { str( max( c1, c2 ) ) } - { str( add ) }'
                else:
                        value1, value2, _ = map(int, dictionary[r].split("-") )
                        
                        # check if track range is overlapping or not
                        if( min(c1, c2) > value2 ):
                                add = add + ( min(c1, c2) - value2  ) - 1
                        
                        dictionary[r] = str( min( value1, min( c1, c2 ) ) ) + "-" + str( max( value2, max( c1, c2 ) ) ) + "-" +str( add )
        
        parsedData = []
        for key, value in dictionary.items():
                parsedData.append( [ int( key ), int( value.split("-")[0] ), int( value.split("-")[1] ), int( value.split("-")[2] ) ] )

        sum = n * m
        for i in range(0, len(parsedData)):
                start = parsedData[i][1]
                end = parsedData[i][2]
                sub = parsedData[i][3]
                sum = sum - ( ( end - start - sub ) + 1 )
                
        return sum
                            

if __name__ == '__main__':
        fptr = open(os.environ['OUTPUT_PATH'], 'w')

        first_multiple_input = input().rstrip().split()

        n = int(first_multiple_input[0])

        m = int(first_multiple_input[1])

        k = int(first_multiple_input[2])

        track = []

        for _ in range(k):
                track.append(list(map(int, input().rstrip().split())))

        result = gridlandMetro(n, m, k, track)

        fptr.write(str(result) + '\n')

        fptr.close()