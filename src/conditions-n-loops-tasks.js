/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    (queen.x === queen.y && king.x === king.y) ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;

  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';

  let lastNumber = num;
  if (num > 10) {
    lastNumber = num % 10;

    const firstNumber = Math.floor(num / 10);
    switch (firstNumber) {
      case 1:
        result += 'X';
        break;
      case 2:
        result += 'XX';
        break;
      case 3:
        result += 'XXX';
        break;
      default:
        break;
    }
  }

  switch (lastNumber) {
    case 1:
      result += 'I';
      break;
    case 2:
      result += 'II';
      break;
    case 3:
      result += 'III';
      break;
    case 4:
      result += 'IV';
      break;
    case 5:
      result += 'V';
      break;
    case 6:
      result += 'VI';
      break;
    case 7:
      result += 'VII';
      break;
    case 8:
      result += 'VIII';
      break;
    case 9:
      result += 'IX';
      break;
    case 10:
      result += 'X';
      break;
    default:
      break;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    result += i > 0 ? ' ' : '';
    switch (numberStr[i]) {
      case '-':
        result += 'minus';
        break;
      case '+':
        result += 'plus';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const halfLength = Math.ceil(str.length / 2);
  for (let i = 0; i < halfLength; i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = `${num}`;
  for (let i = 0; i < numStr.length; i += 1) {
    if (numStr[i] === `${digit}`) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let fullSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    fullSum += arr[i];
  }

  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const rightSum = fullSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let counter = 1;
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  let topLine = 0;
  let rightLine = size - 1;
  let bottomLine = size - 1;
  let leftLine = 0;

  while (counter <= size * size) {
    for (let i = leftLine; i <= rightLine; i += 1) {
      matrix[topLine][i] = counter;
      counter += 1;
    }
    topLine += 1;

    for (let j = topLine; j <= bottomLine; j += 1) {
      matrix[j][rightLine] = counter;
      counter += 1;
    }
    rightLine -= 1;

    for (let i = rightLine; i >= leftLine; i -= 1) {
      matrix[bottomLine][i] = counter;
      counter += 1;
    }
    bottomLine -= 1;

    for (let j = bottomLine; j >= topLine; j -= 1) {
      matrix[j][leftLine] = counter;
      counter += 1;
    }
    leftLine += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const myMatrix = matrix;
  const size = myMatrix.length;

  for (let y = 0; y < size; y += 1) {
    for (let x = y; x < size; x += 1) {
      [myMatrix[x][y], myMatrix[y][x]] = [myMatrix[y][x], myMatrix[x][y]];
    }
  }

  for (let x = 0; x < size; x += 1) {
    for (let y = 0; y < Math.floor(size / 2); y += 1) {
      [myMatrix[x][y], myMatrix[x][size - y - 1]] = [
        myMatrix[x][size - y - 1],
        myMatrix[x][y],
      ];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr) {
  const quickSortStep = (data, leftBorder, rightBorder) => {
    const myArr = data;
    const pivotIndex = Math.floor((rightBorder - leftBorder) / 2) + leftBorder;
    const pivotValue = myArr[pivotIndex];

    [myArr[pivotIndex], myArr[rightBorder]] = [
      myArr[rightBorder],
      myArr[pivotIndex],
    ];

    let borderPosition = leftBorder;
    for (let i = leftBorder; i < rightBorder; i += 1) {
      if (myArr[i] <= pivotValue) {
        [myArr[i], myArr[borderPosition]] = [myArr[borderPosition], myArr[i]];
        borderPosition += 1;
      }
    }

    [myArr[borderPosition], myArr[rightBorder]] = [
      myArr[rightBorder],
      myArr[borderPosition],
    ];

    if (leftBorder < borderPosition - 1) {
      quickSortStep(myArr, leftBorder, borderPosition - 1);
    }

    if (borderPosition + 1 < rightBorder) {
      quickSortStep(myArr, borderPosition + 1, rightBorder);
    }
  };

  quickSortStep(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const moveChars = (initStr) => {
    let even = '';
    let odd = '';
    for (let j = 0; j < initStr.length; j += 1) {
      if (j % 2 === 1) {
        odd += initStr[j];
      } else {
        even += initStr[j];
      }
    }
    return even + odd;
  };

  if (!str || str.length === 0 || iterations <= 0) {
    return str;
  }

  let myStr = str;
  let myCount = iterations;
  while (myCount > 0) {
    myStr = moveChars(myStr);
    myCount -= 1;

    if (myStr === str) {
      const fullShuffle = iterations - myCount;
      myCount = iterations % fullShuffle;
    }
  }

  return myStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const numberToArray = (numToSplit) => {
    let num = numToSplit;
    const arr = [];
    while (num > 0) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    return arr.reverse();
  };

  const lettersArr = numberToArray(number);
  let pivotIndex = -1;
  let pivotValue = -1;
  for (let i = lettersArr.length - 2; i >= 0; i -= 1) {
    if (lettersArr[i] < lettersArr[i + 1]) {
      pivotIndex = i;
      pivotValue = lettersArr[i];
      break;
    }
  }

  if (pivotIndex === -1) {
    return number;
  }

  let nearMinValue = 10;
  let nearMinIndex = -1;
  const lastPartArr = lettersArr.splice(
    pivotIndex + 1,
    lettersArr.length - pivotIndex
  );

  for (let i = 0; i < lastPartArr.length; i += 1) {
    if (lastPartArr[i] < nearMinValue && lastPartArr[i] > pivotValue) {
      nearMinIndex = i;
      nearMinValue = lastPartArr[i];
    }
  }

  if (nearMinIndex > -1) {
    lettersArr[lettersArr.length - 1] = nearMinValue;
    lastPartArr[nearMinIndex] = pivotValue;
  }

  lastPartArr.sort((a, b) => a - b);

  return Number([...lettersArr, ...lastPartArr].join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
