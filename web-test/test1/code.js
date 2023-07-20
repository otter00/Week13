let squares = Array.from(document.getElementsByClassName('little__div'));

console.log(squares);

squares.forEach((element, i) => {
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', ()=>{
            squares[i].classList.toggle('styled__div');
        });
    }
});

console.log(`All children: `)
console.log(document.body.childNodes)
console.log(`Last child: `)
console.log(document.body.lastChild)

function findSum(matrix) {
    var result = [];
    
    for (var i = 0; i < matrix.length; i++) {
      var sum = 0;
      var hasNegative = false;
      
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] < 0) {
          hasNegative = true;
          break;
        }
        sum += matrix[i][j];
      }
      
      if (!hasNegative) {
        result.push(sum);
      }
    }
    
    return result;
  }
  
let arr = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, -9]
  ];
  
  let result = findSum(arr);
  console.log(`Sum in fows where we have no negatives: ` + result);  // [6]
  