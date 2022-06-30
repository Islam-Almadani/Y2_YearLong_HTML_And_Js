function findDifference(a, b) {
    var x = 1 
    x = a[0] * a[1]* a[2]
    var y = 1 
    y = b[0] * b[1]* b[2]
      
    var answer = Math.abs(x - y)
    return (answer)
  }

console.log(findDifference([3, 2, 5],[1, 4, 4]))