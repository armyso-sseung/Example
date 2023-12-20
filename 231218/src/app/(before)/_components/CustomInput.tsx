import style from "./customInput.module.css";
import {ChangeEventHandler} from "react";
import {TypeMessage} from "@/messages/messages";


type PropsType = {
    value :any,
    setValue :ChangeEventHandler<HTMLInputElement>,
    label :string,
    isRequire :boolean,
    isPassword :boolean,
    isDisabled :boolean,
}

type RealType = Partial<PropsType>


export default function CustomInput({ value, setValue, label, isRequire = true, isPassword = false, isDisabled = false } :RealType){
    return (
        <div className={ style.inputDiv }>
            <label className={style.inputLabel} htmlFor={ label }>{ label }</label>
            <input
                id={ label }
                className={style.input}
                type={ isPassword ? TypeMessage.password : TypeMessage.text }
                value={ value || TypeMessage.empty }
                onChange={ setValue }
                required={ isRequire }
                disabled={ isDisabled }
            />
        </div>
    )
}