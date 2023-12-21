"use client"


import Link from "next/link";
import style from "./index.module.css"
import {TitleMessage} from "@/messages/messages";
import useLoginStore from "@/stores/loginStore";


export default function Index () {
    // @ts-ignore
    const { loginInfo } = useLoginStore()


    return (
        <div>
            { loginInfo.id }
            <Link href={'/login'} className={style.login}>{ TitleMessage.login }</Link>
        </div>
    )
}