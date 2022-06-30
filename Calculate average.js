function find_average(array) {
    var x = 0 
    var y = 0
    for (let i = 0; i < array.length; i++) {
        x += array[i]
        y = x / array.length
    }
    return y
  }
console.log(find_average([]));