
// You should implement your task here.

module.exports = function towelSort (matrix) {
 const arr =[];
  if (matrix === undefined) {
    return arr;
  }
  for (let i=0; i < matrix.length; i++){
    for (let j=0; j < matrix[i].length; j++){
      if (i%2 > 0) {
        arr.push(matrix[i][matrix[i].length-1-j]);
      } else {
        arr.push(matrix[i][j]);
      }
    }
  }
  return arr;
}