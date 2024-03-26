"use client";

import AuthForm from "../AuthForm";
export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
  
    console.log("Login",email, password);
  };

  return (
    <main>
      <h1 className="text-center text-3xl">Login</h1>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
