"use client"


import useInput from "@/hooks/use-input";
import RegisterForm from "@/app/(before)/_components/RegisterForm";
import CustomInput from "@/app/(before)/_components/CustomInput";
import {useMemo} from "react";
import {RegisterMessage} from "@/messages/messages";


export default function SellerRegister() {
    const [ id, setId ] = useInput("")
    const [ password, setPassword ] = useInput("")
    const [ rePassword, setRePassword ] = useInput("")
    const [ name, setName ] = useInput("")
    const [ storeName, setStoreName ] = useInput("")


    const sellerInfo = useMemo(() => {
        return { id, password, rePassword, name, storeName }
    }, [ id, password, rePassword, name, storeName ])


    return (
        <RegisterForm userInfo={ sellerInfo }>
            <CustomInput value={ id } setValue={ setId } label={ RegisterMessage.id } />
            <CustomInput value={ password } setValue={ setPassword } label={ RegisterMessage.password } isPassword={true} />
            <CustomInput value={ rePassword } setValue={ setRePassword } label={ RegisterMessage.rePassword } isPassword={true} />
            <CustomInput value={ name } setValue={ setName } label={ RegisterMessage.name } />
            <CustomInput value={ storeName } setValue={ setStoreName } label={ RegisterMessage.storeName } />
        </RegisterForm>
    )
}