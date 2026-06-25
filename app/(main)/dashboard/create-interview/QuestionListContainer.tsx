'use client'
import React from 'react'

const QuestionListContainer = ({ item, index }: any) => {
  return (
    <div
            key={index}
            className="group rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">

              <div className="flex gap-4">

                <div className="flex items-center justify-center h-10 w-10 rounded-full border font-semibold text-sm">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-medium text-lg leading-7">
                    {item.question}
                  </h3>

                  <div className="mt-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          item.difficulty === "Easy"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : item.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                    >
                      {item.difficulty}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
  )
}

export default QuestionListContainer