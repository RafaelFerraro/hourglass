function calculate_sum(arr) {
  var sum = [];
  
  for(x=0; x<4; x++) {
      for(j=0; j<4; j++) {
        sum.push(arr[x][j] + arr[x][j+1] + arr[x][j+2] + arr[x+1][j+1] + arr[x+2][j] + arr[x+2][j+1] + arr[x+2][j+2]);
      };
  };
  
  return Math.max.apply(null, sum);
}