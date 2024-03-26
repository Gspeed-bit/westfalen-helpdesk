"use client";import { useState } from "react";

export default function AuthForm({handleSubmit}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  

  return (
    <form className="w-1/2 py-10 my-5" onSubmit={(e) => handleSubmit(e, email, password)}>
      <label htmlFor="email">
        <span>Email:</span>
        <input
          id="email"
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label htmlFor="password">
        <span>Password:</span>
        <div className="relative">
          <input
            id="password"
            type={passwordVisible ? "text" : "password"}
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-1 text-primary focus:outline-none"
          >
            {passwordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            )}
          </button>
        </div>
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  );
}
