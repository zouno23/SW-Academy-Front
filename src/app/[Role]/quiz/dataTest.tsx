
export  type Question ={
    id: number
    question: string
    options: string[]
    answer: string
  }
  
  export type QuizData= {
    questions: Question[]
  }

export const Datates : QuizData ={
    "questions":[
      {
        "id":0,
        "question":"Which of the following is NOT a common data structure?",
        "options":[
          "Linked list",
          "Stack",
          "Hash table",
          "Semaphore"
        ],
        "answer":"Semaphore"
      },
      {
        "id":1,
        "question":"What does the acronym OOP stand for?",
        "options":[
          "Object Oriented Programming",
          "Open Operating Protocol",
          "Outsourced Programming Project",
          "Optical Output Protocol"
        ],
        "answer":"Object Oriented Programming"
      },
      {
        "id":2,
        "question":"Which of the following is a searching algorithm?",
        "options":[
          "Bubble sort",
          "Merge sort",
          "Binary search",
          "Quick sort"
        ],
        "answer":"Binary search"
      },
      {
        "id":3,
        "question":"What is the time complexity of accessing an element in an array by its index?",
        "options":[
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer":"O(1)"
      },
      {
        "id":4,
        "question":"What is the base case in a recursive function?",
        "options":[
          "The simplest case that can be solved directly",
          "The most complex case that requires further recursion",
          "The average case that represents typical input",
          "The worst case that takes the longest time"
        ],
        "answer":"The simplest case that can be solved directly"
      }]
    }
  