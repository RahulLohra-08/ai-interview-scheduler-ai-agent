'use client'
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarOptions } from "@/services/constants/SidebarOptions"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function AppSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    console.log("Current Pathname:", pathname); // Debugging line

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center mt-2">
        <Image src="/logo1.png" alt="Logo" width={150} height={100} className="w-[150px] cursor-pointer" onClick={() => router.push('/')}/>
        <Button className="w-full mt-2">
            <Plus />
            Create New Interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarContent>
                <SidebarMenu>
                    {/* Map through your sidebar options here */}
                    {SidebarOptions && SidebarOptions.map((option, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton asChild className={`text-[16px] ${pathname == option.path && 'bg-blue-50'}`}>
                                <Link href={option.path} className="flex items-center space-x-2">
                                    <option.icon className={`${pathname == option.path && 'text-primary'}`}/>
                                    <span className={`text-[16px] font-normal ${pathname == option.path && 'text-primary'}`}>{option.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}