// saddle-points

const grid = [
  [9,8,7],
  [5,3,2],
  [6,6,7]
  ];

let gridLength = grid.length;

function checkLargestInRow(grid, coordinate) {
  var row = coordinate[0];
  var col = coordinate[1];
  for(let i = 0; i < gridLength;i++) {
    if (i !== col && grid[row][col] < grid[row][i] ) {
      console.log(grid[row][i])
      return false
    }
  }
  return true
}

function checkSmallestInCol(grid, coordinate) {
  var row = coordinate[0];
  var col = coordinate[1];
  for(let i = 0; i < gridLength;i++) {
    if (i !== row && grid[row][col] >= grid[i][col] ) {
      console.log(grid[i][col])
      return false
    }
  }
  return true
}

function saddlePoint (grid) {
  let resultsArray = [];
  for (let i = 0; i < gridLength; i++ ){
    for(let j = 0; j < gridLength; j++) {
      if ( checkLargestInRow(grid, [i,j]) && checkSmallestInCol(grid, [i,j])) {
        resultsArray.push([i,j])

        console.log("check coordinates",resultsArray)
      }
    }
  }
  return resultsArray
}


saddlePoint(grid)
