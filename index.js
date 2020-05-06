// ** Counting Sheep **

function countSheep(number) {
  if (number === 0) {
    return "All sheep jumped over the fence.";
  }
  return (
    `${number}: Another sheep jumps over the fence \n` + countSheep(number - 1)
  );
}

// console.log(countSheep(5))


// ** Power Calculator **

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  }
  if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, exponent - 1);
}

// console.log(powerCalculator(10, 5));


// ** Reverse String **

function reverseString(string) {
  if (string.length === 0) {
    return "";
  }
  return string[string.length - 1] + reverseString(string.slice(0, -1));
}

// console.log(reverseString('another test'));


// ** nth Triangular Number **

function triangleNumber(number) {
  if (number === 1) {
    return number;
  }
  return number + triangleNumber(number - 1);
}

// console.log(triangleNumber(6));


// ** String Splitter **

function stringSplitter(string, separator, currentString = '') {
  if (string.length === 0) {
    return [currentString];
  }
  if (string[0] === separator) {
    return [currentString, ...stringSplitter(string.slice(1), separator)];
  }
  currentString = currentString + string[0];

  return stringSplitter(string.slice(1), separator, currentString)
}

// console.log(stringSplitter('02/20/2020', '/'));


// ** Fibonacci **

function fibonacciGenerator(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciGenerator(number - 1) + fibonacciGenerator(number - 2);
}

// console.log(fibonacciGenerator(7));


// ** Factorial **

function factorial(number) {
  if (number === 1) {
    return number;
  }
  return number * factorial(number - 1);
}

// console.log(factorial(5));


// ** FIND THE WAY/FIND ALL THE WAYS OUT OF THE MAZE **

let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

// One way maze solution
function mazeSolver(maze, row, column) {
  if (maze[row][column] === 'e') {
    return '';
  }
  if (column < maze[0].length - 1 && maze[row][column + 1] != ('*')) {
    maze[row][column] = 'x';
    const newColumn = column + 1;
    const newRow = row;
    return 'R' + mazeSolver(maze, newRow, newColumn)
  }
  if (row < maze[0].length - 1 && maze[row + 1][column] != ('*')) {
    maze[row][column] = 'x';
    const newColumn = column;
    const newRow = row + 1;
    return 'D' + mazeSolver(maze, newRow, newColumn)
  }
  if (column > 0 && maze[row][column - 1] != ('*')) {
    maze[row][column] = 'x';
    const newColumn = column - 1;
    const newRow = row;
    return 'L' + mazeSolver(maze, newRow, newColumn)
  }
  if (row > 0 && maze[row - 1][column] != ('*')) {
    maze[row][column] = 'x';
    const newColumn = column;
    const newRow = row - 1;
    return 'U' + mazeSolver(maze, newRow, newColumn)
  }
  
}

// console.log(mazeSolver(maze, 0, 0))

// All solutions (NOT WORKING)
/* Tried rearranging directions to get a different answer at least; moving either
 * "U" or "L" before either "D" or "R" breaks the algorithm (max call stack exceeds).
*/
function allMazeSolver(maze, row, column) {
  if (maze[row][column] === 'e') {
    return ;
  }
  if (row < maze[0].length - 1 && maze[row + 1][column] != ('*')) {
    maze[row][column] = 'x';
    const newColumn = column;
    const newRow = row + 1;
    return 'D' + mazeSolver(maze, newRow, newColumn)
  }
  if (row > 0 && maze[row - 1][column] != ('*')) {
    maze[row][column] = 'x';
    const newColumn = column;
    const newRow = row - 1;
    return 'U' + mazeSolver(maze, newRow, newColumn)
  }
  if (column < maze[0].length - 1 && maze[row][column + 1] != ('*')) {
    maze[row][column] = 'x';
    const newColumn = column + 1;
    const newRow = row;
    return 'R' + mazeSolver(maze, newRow, newColumn)
  }
  if (column > 0 && maze[row][column - 1] != ('*')) {
    maze[row][column] = 'x';
    const newColumn = column - 1;
    const newRow = row;
    return 'L' + mazeSolver(maze, newRow, newColumn)
  }
}

// console.log(allMazeSolver(maze, 0, 0))

// ** Anagrams **

function anagram(word) {
  if (word.length < 2) {
    return word;
  }
  let result = [];
  for (let i = 0; i < word.length; i++) {
    let character = word[i];
    if (word.indexOf(character) != i) {
      continue;
    }

    let restOfWord = word.slice(0, i) + word.slice(i + 1, word.length);

    for (let otherWords of anagram(restOfWord)) {
      result.push(character + otherWords);
    }
  }

  return result;
}
// console.log(anagram('east'));


// ** Organization Chart **

function organizational(obj, size = '') {
  if (!obj) {
    return
  }
  for (key in obj) {
    const value = obj[key]
    console.log(size + key)
    organizational(value, size + '  ')
  }
}

data = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: null, Kyle: null, Andra: null
      },
      Zhao: { Richie: null, Sofia: null, Jen: null }
    },
    Schrage: {
      VanDyck: {
        Sabrina: null, Michelle: null, Josh: null
      },
      Swain: { Blanch: null, Tom: null, Joe: null }
    },
    Sandberg: {
      Goler: {
        Eddie: null, Julie: null, Annie: null
      },
      Hernandez: {
        Rowi: null, Inga: null, Morgan: null
      },
      Moissinac: {
        Amy: null, Chuck: null, Vinnie: null
      },
      Kelley: {
        Eric: null, Ana: null, Wes: null
      }
    }
  }
}
// organizational(data)


// ** Binary Representation **

function binaryRepresentation(number) {
  return (number).toString(2)
}

// console.log(binaryRepresentation(25));

