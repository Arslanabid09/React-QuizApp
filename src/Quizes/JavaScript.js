export const JavaScript = [
  {
    id: 1,
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Netscape", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "Apple", correct: false }
    ]
  },
  {
    id: 2,
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    answers: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Function", correct: true },
      { text: "Number", correct: false }
    ]
  },
  {
    id: 3,
    question: "Which method is used to round a number to the nearest integer?",
    answers: [
      { text: "Math.round()", correct: true },
      { text: "Math.floor()", correct: false },
      { text: "Math.ceil()", correct: false },
      { text: "Math.truncate()", correct: false }
    ]
  },
  {
    id: 4,
    question: "Which of the following is used to define a variable in ES6?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: true },
      { text: "const", correct: true },
      { text: "define", correct: false }
    ]
  },
  {
    id: 5,
    question: "What is the correct syntax for a self-invoking function in JavaScript?",
    answers: [
      { text: "(function() {})()", correct: true },
      { text: "function() {}()", correct: false },
      { text: "()function {}()", correct: false },
      { text: "{}function() ()", correct: false }
    ]
  },
  {
    id: 6,
    question: "Which of the following is a falsy value in JavaScript?",
    answers: [
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "'0'", correct: false },
      { text: "'false'", correct: false }
    ]
  },
  {
    id: 7,
    question: "What is the output of `typeof null` in JavaScript?",
    answers: [
      { text: "null", correct: false },
      { text: "object", correct: true },
      { text: "undefined", correct: false },
      { text: "boolean", correct: false }
    ]
  },
  {
    id: 8,
    question: "Which method is used to remove the last element from an array?",
    answers: [
      { text: "shift()", correct: false },
      { text: "pop()", correct: true },
      { text: "splice()", correct: false },
      { text: "slice()", correct: false }
    ]
  },
  {
    id: 9,
    question: "What is the difference between `==` and `===` in JavaScript?",
    answers: [
      { text: "`==` checks for value equality, `===` checks for both value and type equality", correct: true },
      { text: "`==` checks for reference equality, `===` checks for value equality", correct: false },
      { text: "`===` is a shorthand for `==`", correct: false },
      { text: "There is no difference", correct: false }
    ]
  },
  {
    id: 10,
    question: "What will the following code return: Boolean('false')?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "null", correct: false }
    ]
  },
  {
    id: 11,
    question: "Which method is used to add one or more elements to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "concat()", correct: false },
      { text: "join()", correct: false },
      { text: "add()", correct: false }
    ]
  },
  {
    id: 12,
    question: "What does the `this` keyword refer to in JavaScript?",
    answers: [
      { text: "The current object", correct: true },
      { text: "The global object", correct: false },
      { text: "The DOM element", correct: false },
      { text: "The window object", correct: false }
    ]
  },
  {
    id: 13,
    question: "Which of the following is a way to create a new object in JavaScript?",
    answers: [
      { text: "let obj = {}", correct: true },
      { text: "let obj = Object()", correct: true },
      { text: "let obj = New Object()", correct: false },
      { text: "let obj = object.create()", correct: false }
    ]
  },
  {
    id: 14,
    question: "What is the purpose of `Array.prototype.map()` method?",
    answers: [
      { text: "It transforms each element of an array into a new array", correct: true },
      { text: "It removes duplicates from an array", correct: false },
      { text: "It returns the first element of an array", correct: false },
      { text: "It filters an array", correct: false }
    ]
  },
  {
    id: 15,
    question: "How do you declare a function in JavaScript?",
    answers: [
      { text: "function myFunction() {}", correct: true },
      { text: "let function = myFunction() {}", correct: false },
      { text: "def myFunction() {}", correct: false },
      { text: "myFunction() = function {}", correct: false }
    ]
  }
];
