"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm";
import { useState } from "react";

export default function Signup() {
  const [error, setError] = useState();
  const router = useRouter();
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    
    
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    }); // sign up a new user in your database

    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/verify");
    }
  };
  return (
    <main>
      <h1 className="text-center text-3xl">Signup</h1>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}
