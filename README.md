
# Breadth-first search

---

## Task

   Implement a breadth-first search algorithm for a given oriented graph and a starting vertex `S`. The result of the algorithm should be the length of the shortest path (the number of edges to be traversed) from the vertex `S` to the farthest vertex (which can still be reached from the vertex `S`). 

---

### Input data:
   The first line contains the numbers `N` - the number of edges and `S` - the initial vertex. The next `N` lines contain pairs of vertices connected by an edge.
 
### Output data:
   The length of the shortest path to the farthest peak.

### Limit:
   `0 < N <= 10000`
   
---

## Example: 
`In`:

8 5

0 3

1 4

4 2

5 0

5 4 

5 1

1 2

3 1

`Out`: 2

 ![Example image](https://github.com/Wordllban/iotalgo/blob/lab-4/readme-images/example.jpg)
