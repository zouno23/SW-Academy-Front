"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@radix-ui/react-select'
import React, { useState } from 'react'
import { QuizData, Question } from '../dataTest'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Quiz({Data  }:{Data:QuizData }) {

  const [score, setScore] = useState<number>(-1);
  const [checkedOptions, setCheckedOptions] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  // console.log(checked)

  const calculateScore = (): number => {
     let t = 0;
    Data.questions.forEach((question: Question) => {
      if (checkedOptions[question.id] === question.answer) {
        t++;
      }
    });
    return t;
  };


  const handleShowResult = () => {
    const calculatedScore = calculateScore();
    setScore(calculatedScore); // Update score state
    setShowResult(true);
  };
  
  //  score = userAnswers.filter(
  //   (answer) => Data.questions.find((q) => q.id === answer.questionId)?.answer === answer.answer
  // ).length;
  return (
    <>
    <div className="w-full max-w-xl space-y-6">

        <div className=" overflow-autospace-y-4">
        {Data.questions.map((question) => (
  <div key={question.id} className="space-y-2">
    <h2 className="text-xl font-semibold">{question.question}</h2>
    <RadioGroup value={checkedOptions[question.id] || ''}  onChange={(event: React.FormEvent<HTMLDivElement>) => {
      const value = (event.target as HTMLInputElement).value;
      setCheckedOptions({...checkedOptions, [question.id]: value})
    }}>
      <div className="space-y-2">
        {question.options.map((option) => (
          <div key={option} onClick={() => !showResult && setCheckedOptions({...checkedOptions, [question.id]: option})} className="flex items-center gap-2">
            <RadioGroupItem id={option} className={`peer/${option} sr-only `} value={option} />
            <label
              className={cn(`
              flex w-full cursor-pointer items-center justify-between rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium transition-colors
              hover:bg-blue-100 hover:text-blue-900
              dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-blue-800 dark:hover:text-blue-50
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950
              ${checkedOptions[question.id] === option ? "bg-blue-500 hover:bg-blue-400" : ""}
              ${showResult && checkedOptions[question.id] === option && option === question.answer ? "border-green-500 bg-green-100 text-green-800" : ""}
              ${showResult && checkedOptions[question.id] === option && option !== question.answer ? "border-red-500 bg-red-100 text-red-800" : ""}
            `)}
              htmlFor={option}
            >
              <span>{option}</span>
              {showResult && option === question.answer && (
                <CheckIcon className="h-5 w-5 text-green-800" />
              )}
            </label>
          </div>
        ))}
      </div>
    </RadioGroup>
  </div>
))}


    </div>
  </div>
  <div className="flex items-center justify-between">
  <Button onClick={handleShowResult} className="bg-blue-600  text-white  hover:bg-blue-700 ">
    Show Result</Button>
    <div className="flex "> <h2 className="text-xl font-semibold mr-5">Your Score</h2>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <TrophyIcon className="h-5 w-5" />
            {score >= 0 ? (
                <span>{score} out of {Data.questions.length}</span>
              ) : (
                <span>- out of {Data.questions.length}</span>
              )}


          </div>
          </div>
          
         
        </div>
  
  </>
  )
}


function CheckIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }

function TrophyIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }