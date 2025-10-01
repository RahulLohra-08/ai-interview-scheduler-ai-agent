import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import CreateOptions from './_components/CreateOptions'
import LatestInterviewsList from './_components/LatestInterviewsList'

const Dashboard = () => {
  return (
    <div className=''>
      {/* <WelcomeContainer /> */}
      <h2 className='text-xl font-bold mt-5 mb-2'>Dashboard</h2>
      <CreateOptions />
      <LatestInterviewsList />
    </div>
  )
}

export default Dashboard