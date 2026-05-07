import { BookOpen, Clock, Trophy } from 'lucide-react'
import Card from './card'
import React from 'react'

const QuizStart = () => {
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
        </div>
    </div>
  )
}

export default QuizStart