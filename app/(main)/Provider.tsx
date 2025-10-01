import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSidebar'

const DashboardProvider = ({children}:any) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='bg-gray-100 w-[100%]'>
        {/* Sidebar trigger to open and close */}
        <SidebarTrigger />
        {children} 
      </div>
    </SidebarProvider>
  )
}

export default DashboardProvider