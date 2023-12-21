"use client"


import {FormEvent, useCallback} from "react";
import style from "./login.module.css"
import {useRouter} from "next/navigation";
import Link from "next/link";
import useInput from "@/hooks/use-input";
import CustomInput from "@/app/(before)/_components/CustomInput";
import {AlertMessage, LoginMessage, RegisterMessage, TitleMessage} from "@/messages/messages";
import useLoginStore from "@/stores/loginStore";


export default function LoginModal() {
    // @ts-ignore
    const { setLoginInfo } = useLoginStore()

    const [id, setId] = useInput();
    const [password, setPassword] = useInput();
    const [message, setMessage] = useInput();
    const router = useRouter();


    const onSubmit = useCallback(( event :FormEvent ) => {
        if ( !id && !password ) {
            alert( AlertMessage.login )
        }

        const loginInfo = {
            id, password
        }

        // 로그인 정보
        console.log( loginInfo )

        // TODO -> 로그인 API
        setLoginInfo(id)

        router.back()
        event.preventDefault()
    }, [id, password]);

    const handleClickClose = useCallback(() => {
        router.back()
    }, [])


    return (
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <button className={style.closeButton} onClick={ handleClickClose }>
                        <svg width={24} viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                            <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                        </svg>
                    </button>
                    <h2 className={style.logo}>{ TitleMessage.plateer }</h2>
                </div>
                <form onSubmit={ onSubmit }>
                    <div className={style.modalBody}>
                        <CustomInput value={ id } setValue={ setId } label={ RegisterMessage.id } isRequire={ true } isPassword={ false } />
                        <CustomInput value={ password } setValue={ setPassword } label={ RegisterMessage.password } isRequire={ true } isPassword={ true } />
                    </div>
                    <div className={style.message}>{message}</div>
                    <div className={style.modalFooter}>
                        <button className={style.actionButton} disabled={!id || !password}>{ LoginMessage.loginBtn }</button>
                        <div className={style.register}>
                            <Link href={'/register/person'} className={style.person}>{ LoginMessage.personRegister }</Link>
                            <Link href={'/register/seller'} className={style.seller}>{ LoginMessage.sellerRegister }</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}