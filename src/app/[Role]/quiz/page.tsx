import React from 'react'
import ContentQuiz from './ContentQuiz'
// import CardScore from './CardScore'
import { GetScores } from '../../Actions/Quizaction'

export default async function page() {
  const {error,response} = await GetScores()
 console.log(response)
  if(error) throw error

  return (
    <div className=" w-full  h-screen px-5  bg-gray-100 dark:bg-gray-900">
      <ContentQuiz Data={response.Result} />
      {/* <CardScore/> */}
    </div>
  )
}
