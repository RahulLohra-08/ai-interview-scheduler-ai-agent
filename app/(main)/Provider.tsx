import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSidebar'
import CreateInterview from './dashboard/create-interview/page'
import WelcomeContainer from './dashboard/_components/WelcomeContainer'

const DashboardProvider = ({children}:any) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='bg-gray-100 w-[100%] p-10'>
        {/* <SidebarTrigger /> */}
        {/* Sidebar trigger to open and close */}
        <WelcomeContainer />
        {children} 
      </div>
    </SidebarProvider>
  )
}

export default DashboardProvider