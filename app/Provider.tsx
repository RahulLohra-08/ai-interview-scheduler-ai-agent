'use client'
import { UserDetailsContext } from '@/context/UserDetailsContext';
import supabase from '@/services/supabaseClient'
import React, { useContext, useEffect } from 'react'

const Provider = ({children} : any) => {
    const [user, setUser] = React.useState({});
    const createNewUser = async () => {
        try {
            // Get current logged-in user
            const { data: { user }, error: userError } = await supabase.auth.getUser();
            if (userError) throw userError;

            if (!user?.email) {
                console.error("No email found for user");
                return;
            }

            // Check if user already exists in Users table
            const { data: existingUsers, error: fetchError } = await supabase
            .from('Users')
            .select('*')
            .eq('email', user?.email)
            .maybeSingle();  // will return null if no row found

            if (fetchError) throw fetchError;

            // If user does not exist, insert new record
            if (!existingUsers) {
                const { data: newUser, error: insertError } = await supabase
                    .from('Users')
                    .insert([
                    {
                        name: user?.user_metadata?.name || user.email.split('@')[0], // fallback if no name
                        email: user?.email,
                        picture: user.user_metadata?.picture || null,
                        created_at: new Date().toISOString(),
                    },
                    ])
                    .select()
                    .single();

                if (insertError) throw insertError;

                console.log("New user created:", newUser);
                setUser(newUser);
                return;

            } else {
                console.log("User already exists:", existingUsers);
                setUser(existingUsers);
                return;
            }
        } catch (err: any) {
            console.error("Error creating user:", err.message);
        }
    };

    useEffect(() => {
        createNewUser();
    }, [])

  return (
    <UserDetailsContext.Provider value={{user, setUser}}>
        <div>
            {children}
        </div>
    </UserDetailsContext.Provider>
  )
}

export default Provider

//use as a hook
export const useUser = () => {
    const context = useContext(UserDetailsContext);
    return context;
}