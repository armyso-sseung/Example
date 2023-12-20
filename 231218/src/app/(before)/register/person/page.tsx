"use client"


import {useRouter} from "next/navigation";
import Index from "@/app/(before)/page";
import {useEffect} from "react";


export default function RegisterPage() {
    const router = useRouter()
    useEffect(() => {
        router.replace("/register/person")
    }, [])


    return (
        <Index />
    )
}