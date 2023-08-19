"use client";
import style from "@/app/style/home.module.css";
import { useEffect, useState } from "react";

const page = () => {
  const [userData, setuserData] = useState("");

  const getData = async () => {
    try {
      const result = await fetch("http://localhost:8000/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        credentials: "include",
      });

      const realData = await result.json();
      setuserData(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={style.home_}>
      <form action="" method="GET">
        <p>Welcome {userData.username} </p>
      </form>
    </section>
  );
};

export default page;
