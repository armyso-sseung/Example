"use client"


import {useRouter} from "next/navigation";
import {useEffect} from "react";
import Index from "@/app/(before)/page";


export default function RegisterPage() {
    const router = useRouter()
    useEffect(() => {
        router.replace("/register/seller")
    }, [])


    return (
        <Index />
    )
}