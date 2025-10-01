import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import CreateOptions from './_components/CreateOptions'

const Dashboard = () => {
  return (
    <div className=''>
      <WelcomeContainer />
      <h2 className='text-xl font-bold my-2'>Dashboard</h2>
      <CreateOptions />
    </div>
  )
}

export default Dashboard