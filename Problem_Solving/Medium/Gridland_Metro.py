"""

/****************************************************************
*               HACKERRANK GRIDLAND METRO CHALLENGE	        *
*                                                               *
* The city of Gridland is represented as an n * m matrix where  *
* the rows are numbered from 1 to n and the columns are numbered*
* from 1 to m.                                                  *
*                                                               *
* Gridland has a network of train tracks that always run in     *
* straight horizontal lines along a row. In other words, the    *
* start and end points of a train track are (r, c1) & (r, c2)   *
* where r represents the row number, c1 represents the starting *
* column, and c2 represents the ending column of the train track*
*                                                               *
* The mayor of Gridland is surveying the city to determine the  *
* number of locations where lampposts can be placed.            *
* A lamppost can be placed in any cell that is not occupied by  *
* a train track.                                                *
*                                                               *
* Given a map of Gridland and its k  train tracks, find and     *
* print the number of cells where the mayor can place lampposts *
*                                                               *
* Note: A train track may overlap other train tracks within the *
* same row.                                                     *
*                                                               *
* For Example: If Gridland's data is the following              *
* (1-based indexing):                                           *
*                       k = 3                                   *
*                       r   c1  c2                              *
*                       1   1   4                               *
*                       2   2   4                               *
*                       3   1   2                               *
*                       4   2   3                               *
* In this case, there are five open cells (red) where lampposts *
* can be placed.                                                *
*                                                               *
* Function Description: Complete the gridlandMetro function in  *
* the editor below.                                             *
* gridlandMetro has the following parameter(s):                 *
* 1) int n:: the number of rows in Gridland                     *
* 2) int m:: the number of columns in Gridland                  *
* 3) int k:: the number of tracks                               *
* 4) track[k][3]: each element contains 3 integers that         *
*    represent row, column start, column end all 1-indexed      *
*                                                               *
* Returns:                                                      *
* 1) int: the number of cells where lampposts can be installed  *
*                                                               *
* Input Format                                                  *
* The first line contains three space-separated integers n, m, k*
* the number of rows, columns and tracks to be mapped.          *
* Each of the next k lines contains three space-separated       *
* integers, r, c1 and c2 the row number and the track column    *
* start and end                                                 *
*                                                               *
* Contraints                                                    *
* 1) 1 <= n, m <= 10 ^ 9                                        *
* 2) 0 <= k <= 1000                                             *
* 3) 1 <= r <= n                                                *
* 4) 1 <= c1 <= c2 <= m                                         *
*                                                               *
* Input 1:                                                      *
*             STDIN   Function                                  *
*                                                               *
*             4 4 3   n = 4, m = 4, k = 3                       *
*             2 2 3   track = [[2, 2, 3], [3, 1, 4], [4, 4, 4]] *
*             3 1 4                                             *
*             4 4 4                                             *
*                                                               *
*                                                               *
* Output 1:                                                     *
*             9                                                 *
*                                                               *
****************************************************************/

"""

#!/bin/python3

import math
import os
import random
import re
import sys


def gridlandMetro(n, m, k, track):
        """
        :type n: int
        :type m: int
        :type k: int
        :type track: [][]
        :rtype: int
        """
        dictionary = {}
        add = 0
        for i in range( 0, len( track ) ):                
                r, c1, c2 = track[i]
                c1 = min(c1, c2)
                c2 = max(c1, c2 )

                if( r not in dictionary ):
                        dictionary[r] = f'{ c1 } - { c2 } - { add }'
                else:
                        column1, column2, _ = map(int, dictionary[r].split("-") )
                        
                        # check if track range is overlapping or not
                        if( min(c1, c2) > column2 ):
                                add = add + ( c1 - column2  ) - 1
                        
                        dictionary[r] = f'{ min( column1, c1 ) } - { max( column2, c2 ) } - { add }'
        
        parsedData = []
        for key, value in dictionary.items():
                c1, c2, sub = map(int, value.split("-") )
                parsedData.append( [ key, c1, c2, sub ] )

        sum = n * m
        for i in range(0, len(parsedData)):
                _, start, end, sub = parsedData[i]
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