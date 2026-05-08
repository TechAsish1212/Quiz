import { BookOpen, Clock, Play, Trophy } from 'lucide-react'
import Card from './card'
import React from 'react'
import { quizRules } from '../data/rule'

const QuizStart = () => {
  let count = 0;
  return (
    <div className='max-w-4xl mx-auto py-6 '>
      <div className='bg-white rounded-xl shadow-xl p-8 text-center'>
        <div className='mb-8'>
          <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-300 to-purple-300 mb-6 rounded-full'>
            <BookOpen className="h-10 w-10 text-blue-700" />
          </div>
          <h1 className='text-2xl font-bold mb-4 text-gray-800'>React Knowledge Quiz</h1>
          <div className='w-70 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto m-3 rounded-full'></div>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto capitalize'>test your Knowledge of react, javascript, and web development answer multiple choice questions and see how well you know the fundamental.</p>
        </div>
        {/* cards */}
        <div className='grid md:grid-cols-3 gap-6 mb-8'>
          <Card icon={BookOpen} title='Questions' value='10' color='ques' />
          <Card icon={Clock} title='Minutes' value='5:00' color='mins' />
          <Card icon={Trophy} title='Max Score' value='100%' color='score' />
        </div>

        {/* Quiz rules */}
        <div className='mb-8'>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>Quiz Rules</h3>
          <div className='bg-gray-100 p-6 rounded-xl text-left max-w-2xl mx-auto shadow-xl'>
            {
              quizRules.map((ruleSet) => (
                ruleSet.rule.map((rule) => {
                  count++;
                  return (
                    <li key={`${ruleSet.id}-${count}`} className='flex items-start mt-3'>
                      <span className='flex-shrink-0 w-6 h-6 bg-indigo-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 '>{count}</span>
                      <span className=''>{rule}</span>
                    </li>
                  )
                })
              ))
            }
          </div>
        </div>

        {/* button */}
        <button className='inline-flex space-x-3 items-center bg-gradient-to-r from-indigo-600 to-purple-600 py-4 px-8 rounded-xl text-white font-semibold hover:from-indigo-700 hover:to-purple-700 cursor-pointer transform hover:scale-105 transition-all duration-200 shadow-lg'>
          <Play size={24}/>
          <span>Start Quiz</span>
        </button>
      </div>
    </div>
  )
}

export default QuizStart