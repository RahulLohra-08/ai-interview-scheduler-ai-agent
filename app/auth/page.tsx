'use client'
import { Button } from '@/components/ui/button'
import supabase from '@/services/supabaseClient'
import Image from 'next/image'
import React from 'react'

const Login = () => {

    //Use to sign in with google
    const signInWithGoogle = async() => {
        try {
            await supabase.auth.signInWithOAuth({
                provider: 'google',   
            })
        } catch (error: any) {
            console.log("Error: ", error.message);
        }
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='mx-2 flex flex-col items-center px-8 border-[1px] rounded-2xl'>
            <div className='flex flex-col items-center'>
                <Image src="/logo1.png" alt="logo" width={600} height={100} className='w-[184px] h-[65px]'/>
            </div>
            <div>
                <Image src="/login.png" alt="login" width={400} height={400} className='rounded-2xl'/>
                <h2 className='text-center text-xl font-bold mt-5'>Welcome to AiInterviewer</h2>
                <p className='text-gray-500 text-center text-sm'>Sign In With Google Authentication</p>
                <Button className='my-6 w-full' onClick={signInWithGoogle}>Login with Google</Button>
            </div>
        </div>
    </div>
  )
}

export default Login