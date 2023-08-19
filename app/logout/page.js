"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {

    const router = useRouter();

    const getData = async () =>{
        try {
            const result = await fetch("http://localhost:8000/logout", {
                method  : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })


            if(result.status === 200){
                router.push('/login')
            }

        } catch (error) {
            console.log(error);
        }
    }

  useEffect(() => {
    getData();
  }, []);

  return <div>logout</div>;
};

export default page;
