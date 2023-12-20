"use client"


import {FormEvent, ReactNode, useCallback, useEffect} from "react";
import style from "./register.module.css"
import {useRouter} from "next/navigation";
import {AlertMessage, TitleMessage} from "@/messages/messages";

type PropsType = {
    children :ReactNode,
    userInfo :UserInfoType
}

type UserInfoType = {
    [ key :string ] :string | number | any
}


export default function RegisterForm({ children, userInfo } :PropsType) {
    const router = useRouter()


    useEffect(() => {
        // 사용자 데이터 확인
        // console.log( userInfo )
    }, [ userInfo ])


    const handleClickClose = useCallback(() => {
        router.back()
    }, [])

    const handleSubmitForm = useCallback(( event :FormEvent ) => {
        Object.keys(userInfo).forEach( user => {
            if ( !userInfo[user] ) {
                alert(AlertMessage.require)
                return
            }
        })

        if ( userInfo?.password !== userInfo?.rePassword ) {
            alert(AlertMessage.password)
            return
        }

        router.back()
        event.preventDefault()
    }, [ userInfo ])


    return (
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <button className={style.closeButton} onClick={ handleClickClose }>
                        <svg width={24} viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                            <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" /></g>
                        </svg>
                    </button>
                    <div>{ TitleMessage.registerTitle }</div>
                </div>
                <form onSubmit={handleSubmitForm}>
                    <div className={style.modalBody}>
                        { children }
                        <button type="submit" className={style.registerBtn}>{ TitleMessage.register }</button>
                    </div>
                </form>
            </div>
        </div>
    )
}