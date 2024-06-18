"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CardContent, Card } from "@/components/ui/card";
import { Datates, QuizData } from "./dataTest";
import Quiz from "./QuizComp/Quiz";
import { Divide } from "lucide-react";
import { GetQuiz, GetScores } from "../../Actions/Quizaction";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Loading from "./QuizComp/loading";

export default function ContentQuiz({ Data }: { Data: any }) {
  // GetQuiz
  const [available, setAvailable] = useState(Data.available);
  const [loading, setLoading] = useState(false);
  const [quizVisible, setQuizVisible] = useState(false);
  const [quizData, setQuizData] = useState<QuizData>(Datates);
  const [hasAttemptedQuiz, setHasAttemptedQuiz] = useState(false);
  const handleStartQuiz = async () => {
    setHasAttemptedQuiz(true);
    setLoading(true);
    try {
      const { error, response } = await GetQuiz();
      console.log(response.Result);
      if (error) throw error;
      setAvailable(false);
      setQuizData(response.Result);
      setQuizVisible(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  function calculatePercentage(value: number, total: number) {
    return (value / total) * 100;
  }
  return (
    <main className=" bg-white  rounded-xl flex flex-col overflow-auto h-full place-items-center gap-8 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-xl space-y-2 ">
        <h1 className="text-3xl font-bold">Daily Quiz</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Test your knowledge with our daily quiz. Select the correct answer for
          each question.
        </p>
      </div>
      <div className="w-full max-w-xl space-y-6">
        {loading && <Loading />}
        {available && (
          <Button
            className="bg-blue-600 text-white  hover:bg-blue-700"
            onClick={handleStartQuiz}
            disabled={loading}
          >
            Start Quiz
          </Button>
        )}
        {quizVisible && <Quiz Data={quizData} />}
        {!available &&
          !hasAttemptedQuiz && ( // only show the message if hasAttemptedQuiz is false
            <p className="text-gray-500 dark:text-gray-400">
              You can t take the quiz now, come back later!
            </p>
          )}
      </div>
      <div className="w-full max-w-xl space-y-4">
        <div className=" my-5  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
              <TrophyIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div className="text-2xl font-bold">{Data.totalScore} </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                total points
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
              <TrophyIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div className="text-2xl font-bold">
                {Data.lastTwoScores.length > 0 ? Data.lastTwoScores[0] : "-"}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Most recent
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
              <TrophyIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div className="text-2xl font-bold">
                {Data.lastTwoScores.length > 1 ? Data.lastTwoScores[1] : "-"}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Second most recent
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
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
  );
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
  );
}

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
