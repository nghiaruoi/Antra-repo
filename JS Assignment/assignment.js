// 1. Reverse a Number
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}
console.log("1. Reverse Number:", reverseNumber(32243)); // Output: 34223

// 2. Check if a String is a Palindrome
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log("2. Is Palindrome:", isPalindrome("madam")); // Output: true

// 3. Generate All Combinations of a String
function stringCombinations(str) {
  let result = [];

  const backtrack = (current, i) => {
    if (i > str.length) {
      return;
    }

    result.push(current.join(''));
    for (let j = i; j < str.length; j++) {
      current.push(str[i])
      backtrack(current, j + 1);
      current.pop()
    }
  }
  backtrack([], 0)
  return result;
}
console.log("3. String Combinations:", stringCombinations('dog')); // Output: ["d", "do", "dog", "o", "og", "g"]

// 4. Sort Letters in Alphabetical Order
function sortLetters(str) {
  return str.split('').sort().join('');
}
console.log("4. Sort Letters:", sortLetters('webmaster')); // Output: 'abeemrstw'

// 5. Capitalize the First Letter of Each Word
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log("5. Capitalize Words:", capitalizeWords('the quick brown fox')); // Output: 'The Quick Brown Fox'

// 6. Find the Longest Word in a String
function longestWord(str) {
  const words = str.split(' ');
  return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
console.log("6. Longest Word:", longestWord('Web Development Tutorial')); // Output: 'Development'

// 7. Count the Number of Vowels in a String
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}
console.log("7. Count Vowels:", countVowels('The quick brown fox')); // Output: 5

// 8. Check if a Number is Prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("8. Is Prime:", isPrime(7)); // Output: true

// 9. Return the Type of an Argument
function getType(arg) {
  return typeof arg;
}
console.log("9. Get Type:", getType(42)); // Output: 'number'

// 10. Generate an Identity Matrix
function identityMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i === j ? 1 : 0;
    }
  }
  return matrix;
}
console.log("10. Identity Matrix:", identityMatrix(3)); // Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

// 11. Find the Second Lowest and Second Greatest Numbers
function secondLowestAndGreatest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return [sortedArr[1], sortedArr[sortedArr.length - 2]];
}
console.log("11. Second Lowest and Greatest:", secondLowestAndGreatest([1, 2, 3, 4, 5])); // Output: [2, 4]

// 12. Check if a Number is Perfect
function isPerfectNumber(num) {
  if (num <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}
console.log("12. Is Perfect Number:", isPerfectNumber(6)); // Output: true

// 13. Compute the Factors of a Positive Integer
function getFactors(num) {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return factors;
}
console.log("13. Get Factors:", getFactors(12)); // Output: [1, 2, 3, 4, 6, 12]

// 14. Convert an Amount to Coins
function amountToCoins(amount, coins) {
  const result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      result.push(coin);
      amount -= coin;
    }
  }
  return result;
}
console.log("14. Amount to Coins:", amountToCoins(46, [25, 10, 5, 2, 1])); // Output: [25, 10, 10, 1]

// 15. Compute the Value of b^n
function power(b, n) {
  return Math.pow(b, n);
}
console.log("15. Power:", power(2, 3)); // Output: 8

// 16. Extract Unique Characters from a String
function uniqueCharacters(str) {
  return [...new Set(str)].join('');
}
console.log("16. Unique Characters:", uniqueCharacters("thequickbrownfoxjumpsoverthelazydog")); // Output: "thequickbrownfxjmpsvlazydg"

// 17. Count Occurrences of Each Letter in a String
function countLetterOccurrences(str) {
  const counts = {};
  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}
console.log("17. Count Letter Occurrences:", countLetterOccurrences("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

// 18. Binary Search in an Array
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log("18. Binary Search:", binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

// 19. Return Array Elements Larger Than a Number
function filterLargerThan(arr, num) {
  return arr.filter(item => item > num);
}
console.log("19. Filter Larger Than:", filterLargerThan([1, 2, 3, 4, 5], 3)); // Output: [4, 5]

// 20. Generate a Random String ID
function generateRandomId(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
console.log("20. Generate Random ID:", generateRandomId(8)); // Output: Random 8-character string

// 21. Generate All Possible Subsets of Fixed Length
function subsetsOfLength(arr, length) {
  const result = [];
  const generate = (start, current) => {
    if (current.length === length) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      generate(i + 1, current);
      current.pop();
    }
  };
  generate(0, []);
  return result;
}
console.log("21. Subsets of Length:", subsetsOfLength([1, 2, 3], 2)); // Output: [[1, 2], [1, 3], [2, 3]]

// 22. Count Occurrences of a Letter in a String
function countLetter(str, letter) {
  return str.split('').filter(char => char === letter).length;
}
console.log("22. Count Letter:", countLetter('microsoft.com', 'o')); // Output: 3

// 23. Find the First Non-Repeated Character
function firstNonRepeatedCharacter(str) {
  const counts = {};
  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for (let char of str) {
    if (counts[char] === 1) return char;
  }
  return null;
}
console.log("23. First Non-Repeated Character:", firstNonRepeatedCharacter('abacddbec')); // Output: 'e'

// 24. Bubble Sort Algorithm
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
console.log("24. Bubble Sort:", bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); // Output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// 25. Find the Longest Country Name
function longestCountryName(countries) {
  return countries.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
console.log("25. Longest Country Name:", longestCountryName(["Australia", "Germany", "United States of America"])); // Output: "United States of America"

// 26. Find the Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeating(str) {
  let longest = '';
  let current = '';
  for (let char of str) {
    if (current.includes(char)) {
      if (current.length > longest.length) longest = current;
      current = current.slice(current.indexOf(char) + 1);
    }
    current += char;
  }
  return current.length > longest.length ? current : longest;
}
console.log("26. Longest Substring Without Repeating:", longestSubstringWithoutRepeating("abcabcbb")); // Output: "abc"

// 27. Find the Longest Palindrome in a String
function longestPalindrome(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  return longest;
}
console.log("27. Longest Palindrome:", longestPalindrome("bananas")); // Output: "anana"

// 28. Pass a Function as a Parameter
function executeFunction(func, arg) {
  return func(arg);
}
function square(x) {
  return x * x;
}
console.log("28. Execute Function:", executeFunction(square, 5)); // Output: 25

// 29. Get the Function Name
function getFunctionName(func) {
  return func.name;
}
function exampleFunction() { }
console.log("29. Get Function Name:", getFunctionName(exampleFunction)); // Output: "exampleFunction"