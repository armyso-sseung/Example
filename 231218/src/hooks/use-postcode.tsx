import {useState} from "react";
import {useDaumPostcodePopup} from "react-daum-postcode";
import {PostcodeMessage, RegisterMessage} from "@/messages/messages";
import style from "./postcode.module.css"


export const usePostcode = () => {
    const open = useDaumPostcodePopup();
    const [ postInfo, setPostInfo ] = useState<any>({})


    const handleComplete = ( data :{ [ key :string ] :any } ) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }

            setPostInfo(data)

            // 전체 주소 ( 우편번호 미포함 )
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };


    const Postcode = () => {
        return (
            <div className={style.postcodeWrap}>
                <div className={style.address}>
                    <label className={style.addressLabel} htmlFor="address">{ RegisterMessage.address }</label>
                    <input id={"address"} className={style.addressInput} value={postInfo.address} disabled />
                    <button type={"button"} className={ style.postcodeBtn } onClick={handleClick} >
                        { PostcodeMessage.open }
                    </button>
                </div>
            </div>
        )
    }

    return {
        Postcode,
        postInfo
    }
}