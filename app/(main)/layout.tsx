import React from 'react'
import DashboardProvider from './Provider'

const DashboardLayout = ({children}:any) => {
  return (
    <div>
        <DashboardProvider> 
          <div className='p-8'>
            {children}
          </div>
        </DashboardProvider>
    </div>
  )
}

export default DashboardLayout