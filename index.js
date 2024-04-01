//task 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function divideByThree(arr) {
  return arr.filter((item) => item % 3 === 0);
}

//task 2
function returnEvens(arr) {
  return arr.filter((item) => item % 2 === 0);
}

//task 3
const arr2 = ["one", "two", "three", "four", "five", "six"];
function capitalizeFirstLetter(arr) {
  return arr
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
}

//task 4
str = "В лесу родилась елочка";
function reverceFirstAndLastLetter(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length > 1) {
        const firstChar = word[0];
        const lastChar = word[word.length - 1];
        const middleChars = word.slice(1, -1);
        return lastChar + middleChars + firstChar;
      } else {
        return word;
      }
    })
    .join(" ");
}

//task 5
const floatArray = [-2.8, -5, 1.5, 2.3, 3.7, 4.8, 5.2];

function countPositives(arr) {
  return arr.filter((item) => item > 0).length;
}
function multiplyNegatives(arr) {
  return arr.filter((item) => item < 0).reduce((a, b) => a * b);
}

//task 6
let array = [24, 35, 29, 44, 8, 22, 4];
function countInversions(arr) {
  return arr.filter((a, b) => a > arr[b + 1]).length;
}

//task 7
const a = [190, 187, 198, 200, 127, 190];
const b = [190, 183, 197, 200, 128];
function countSame(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

//task 8
function checkArrayForPair(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index).length > 0;
}

//task 9
const students = [
  { name: "Tirion", class: "B", mark: 3 },

  { name: "Keit", class: "A", mark: 3 },

  { name: "Ramsey", class: "A", mark: 4 },

  { name: "Mike", class: "B", mark: 5 },

  { name: "Alex", class: "C", mark: 2 },
];

function countMaxMark(object) {
  return object.reduce((acc, student) => {
    const mark = student.mark;
    return mark > acc ? mark : acc;
  }, 0);
}

function countMinMark(object) {
  return object.reduce((acc, student) => {
    const mark = student.mark;
    return mark < acc ? mark : acc;
  }, 5);
}

function countAverageMark(object) {
  return (
    object.reduce((acc, student) => {
      const mark = student.mark;
      return acc + mark;
    }, 0) / object.length
  );
}

function countMarks(object) {
  return object.reduce((acc, student) => {
    const mark = student.mark;
    return acc + mark;
  }, 0);
}

function countStudents(object) {
  return object.length;
}

function groupByClass(object) {
  return object.reduce((acc, student) => {
    if (acc[student.class]) {
      acc[student.class].push(student);
    } else {
      acc[student.class] = [student];
    }
    return acc;
  }, {});
}

//task 10

const sites = [
  "http://google.com",
  "https://hexlet.io",
  " yandex.ru",
  "dzen.ru",
  "https://ya.ru ",
  "https://github.com",
  "http://mail.ru",
];
function countSitesByProtocol(sites) {
  return sites.reduce(
    (acc, site) => {
      if (site.startsWith("http://")) {
        acc.http += 1;
      } else if (site.startsWith("https://")) {
        acc.https += 1;
      } else {
        acc.http += 1;
      }
      return acc;
    },
    { http: 0, https: 0 }
  );
}

console.log(countSitesByProtocol(sites));
