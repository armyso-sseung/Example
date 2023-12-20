"use client"


import useInput from "@/hooks/use-input";
import RegisterForm from "@/app/(before)/_components/RegisterForm";
import CustomInput from "@/app/(before)/_components/CustomInput";
import {usePostcode} from "@/hooks/use-postcode";
import {useMemo} from "react";
import {RegisterMessage} from "@/messages/messages";


export default function PersonRegister() {
    const [ id, setId ] = useInput("")
    const [ password, setPassword ] = useInput("")
    const [ rePassword, setRePassword ] = useInput("")
    const [ name, setName ] = useInput("")
    const [ detail, setDetail ] = useInput("")
    const { postInfo, Postcode } = usePostcode()


    const personInfo = useMemo(() => {
        return {
            address: postInfo?.address,
            zipcode: postInfo?.zonecode,
            id, password, rePassword, name, detail
        }
    }, [ postInfo, id, password, rePassword, name, detail ])


    return (
        <RegisterForm userInfo={ personInfo }>
            <CustomInput value={ id } setValue={ setId } label={ RegisterMessage.id } />
            <CustomInput value={ password } setValue={ setPassword } label={ RegisterMessage.password } isPassword={true} />
            <CustomInput value={ rePassword } setValue={ setRePassword } label={ RegisterMessage.rePassword } isPassword={true} />
            <CustomInput value={ name } setValue={ setName } label={ RegisterMessage.name } />
            <Postcode />
            <CustomInput value={ detail } setValue={ setDetail } label={ RegisterMessage.addressDetail } isDisabled={ postInfo?.address ? false : true }/>
        </RegisterForm>
    )
}