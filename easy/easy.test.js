const {
  reverseString,
  factorialize,
  isPelindrome,
  findLongesWord,
  toTitleCase,
  largestOfFour,
  confirmEnding,
  truncateString,
} = require('./index');

test('should reverse a string', () => {
  expect(typeof reverseString('Hello')).toBe('string');
  expect(reverseString('hello!')).toBe('!olleh');
});

test('should factorize', () => {
  expect(typeof factorialize(5)).toBe('number');
  expect(factorialize(5)).toBe(120);
});

test('should be a pelindrome string', () => {
  expect(typeof isPelindrome('race car')).toBe('boolean');
  expect(isPelindrome('race car')).toBe(true);
  expect(isPelindrome('never odd or even')).toBe(true);
  expect(isPelindrome('_eye')).toBe(true);
  expect(isPelindrome('not a palindrome')).toBe(false);
  expect(isPelindrome('1 eye for of 1 eye')).toBe(false);
});

test('should return the longest word', () => {
  expect(
    typeof findLongesWord('The quick brown fox jumped over the lazy dog"'),
  ).toBe('number');

  expect(findLongesWord('The quick brown fox jumped over the lazy dog')).toBe(
    6,
  );
  expect(
    findLongesWord(
      'What if we try a super-long word such as otorhinolaryngology',
    ),
  ).toBe(19);
  expect(
    findLongesWord(
      'What is the average airspeed velocity of an unladen swallow',
    ),
  ).toBe(8);
});

test('should return sting in title case', () => {
  expect(typeof toTitleCase("I'm a little tea pot")).toBe('string');
  expect(toTitleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  expect(toTitleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toBe(
    'Here Is My Handle Here Is My Spout',
  );
});
test('should return larges of the arrays', () => {
  expect(
    Array.isArray(
      largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
      ]),
    ),
  ).toBe(true);
  expect(
    largestOfFour([
      [13, 27, 18, 26],
      [4, 5, 1, 3],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1],
    ]),
  ).toContain(27);
});

test('should confirm the endings', () => {
  expect(typeof confirmEnding('Bastian')).toBe('boolean');
  expect(
    confirmEnding(
      'Walking on water and developing software from a specification are easy if both are frozen',
      'specification',
    ),
  ).toBe(false);
  expect(confirmEnding('Open sesame', 'same')).toBe(true);
});

// test('should truncate string', () => {
//   expect(typeof truncateString()).toBe('string');
//   expect(
//     truncateString('A-tisket a-tasket A green and yellow basket', 11),
//   ).toBe('A-tisket...');
//   expect(
//     truncateString(
//       'A-tisket a-tasket A green and yellow basket',
//       'A-tisket a-tasket A green and yellow basket'.length,
//     ),
//   ).toBe('A-tisket a-tasket A green and yellow basket');
//   expect(truncateString('A-', 1)).toBe('A...');
// });
