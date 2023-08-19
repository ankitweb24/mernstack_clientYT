"use client";
import React, { useState } from "react";
import style from "@/app/style/signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const postData = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Include credentials (cookies) in the request
      });

      if (!result.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await result.json();
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form method="POST" className={style.form_}>
      <h2>Login Form</h2>

      <div className={style.form_control}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="email"
          name="email"
        />
      </div>

      <div className={style.form_control}>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="password"
          name="password"
        />
      </div>

      <button type="submit" onClick={postData}>
        Login
      </button>
      <hr className={style.hr_} />
      <p className={style.login_}>
        Create New Account ? <Link href="/signup">Signup</Link>{" "}
      </p>
    </form>
  );
};

export default page;
