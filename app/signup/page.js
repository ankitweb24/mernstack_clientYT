"use client";
import React, { useState } from "react";
import style from "@/app/style/signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {


  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { username, email, phone, password, cpassword } = user;
    const res = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        password,
        cpassword,
      }),
    });

   const data =  await res.json();
   if(data){
    console.log('data saved');
    router.push('/login')
   }else{
   
    console.log('data not saved');
   }
    
  };

  return (
    <form method="POST" className={style.form_}>
      <h2>Signup Form</h2>
      <div className={style.form_control}>
        <label htmlFor="user">User Name</label>
        <input
          value={user.username}
          onChange={handleInputs}
          type="text"
          id="user"
          placeholder="user name"
          name="username"
        />
      </div>
      <div className={style.form_control}>
        <label htmlFor="email">Email</label>
        <input
          value={user.email}
          onChange={handleInputs}
          type="email"
          id="email"
          placeholder="email"
          name="email"
        />
      </div>
      <div className={style.form_control}>
        <label htmlFor="phone">Phone</label>
        <input
          value={user.phone}
          onChange={handleInputs}
          type="number"
          id="phone"
          placeholder="Phone"
          name="phone"
        />
      </div>
      <div className={style.form_control}>
        <label htmlFor="password">Password</label>
        <input
          value={user.password}
          onChange={handleInputs}
          type="password"
          id="password"
          placeholder="password"
          name="password"
        />
      </div>
      <div className={style.form_control}>
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          value={user.cpassword}
          onChange={handleInputs}
          type="password"
          id="cpassword"
          placeholder="confim password"
          name="cpassword"
        />
      </div>
      <button type="submit" onClick={postData}>
        Submit
      </button>
      <hr className={style.hr_}/>
      <p className={style.login_}>Already Have An Account ? <Link href='/login'>Login</Link> </p>
    </form>
  );
};

export default page;
