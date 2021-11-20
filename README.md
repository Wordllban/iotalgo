
# Fantz

## Task

Beavers Antin and Ori came up with a game - to invent random binary numbers, and to see if these numbers can be broken into pieces, each of which is the power of the number X in the decimal system.

For example, if `X == 5`, then the binary number `101110011` can be divided into `101`, `11001` and `1`, each of which is 5 to some degree (`101` in decimal `== 5 == 5 ^ 1`, `11001 == 25 == 5 ^ 2` and `1 == 1 is 5 ^ 0`).

Demonstrate that humans are smarter than beavers, and for a given binary number `N`, find the smallest number of pieces to break it into.

### Input data:
   The first line contains X - a sequence of zeros and ones and N.

### Output data:
   The smallest number of pieces into which we can divide the input number, or -1 if this is not possible.

### Limit:
   + `0 < len (X) < 100`
   + `0 < N < 100`
