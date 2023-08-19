"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from '@/app/style/about.module.css'
import Link from "next/link";
const page = () => {
  const [userData, setuserData] = useState("");

  const router = useRouter();

  const aboutpage = async () => {
    try {
      const result = await fetch("http://localhost:8000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const realData = await result.json();

      setuserData(realData);

      if (result.status === 401) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    aboutpage();
  }, []);

  return (
    <form action="" method="GET" className={style.form_}>
      <ul>
        <li>User : {userData.username}</li>
        <li>email : {userData.email}</li>
      </ul>
      <Link className={style.logout_btn} href="/logout">Logout</Link>
    </form>
  );
};

export default page;
