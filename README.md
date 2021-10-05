
# Lab-3

---

## Task
   Following the rapid release of a new version of its operating system, NanoSoft began receiving numerous bug reports from users. To track the progress of bug fixes, the development team decided to put a large square board and attach a sheet to it for each bug. However, in order for the board to fit in the room, it is necessary that it is not too big. All `N` leaves have a rectangular shape and the same size `W × H`. They cannot be rotated or stacked on top of each other. Find the minimum size of a square board that can hold all the leaves. Example of a minimum board that can hold 10 2 × 3 sheets:
 
   ![Example image](https://github.com/Wordllban/iotalgo/blob/lab-3/readme-images/square_image.jpg)

### Input data
   The `bugtrk.in` input file consists of one line. It contains three numbers, separated
   space: `N`, `W`, `H` - number of leaves, width and height of the leaf, respectively.
   
  + 1 ≤ N ≤ 1012
  + 1 ≤ W ≤ 109
  + 1 ≤ H ≤ 109

### Output data
   The source `bugtrk .out` file must contain one number - the minimum side length
   square board. 

---

## Examples
   + Example 1
   
      `bugtrk.in <br />
      10 2 3`

      `bugtrk.out
      9`
   + Example 2
   
      `bugtrk.in
      2 1000000000 999999999`

      `bugtrk.out
      1999999998`
   + Example 3
   
      `bugtrk.in
      4 1 1`

      `bugtrk .out
      2`
   
   
