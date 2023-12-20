import {ChangeEvent, useCallback, useState} from "react";


export default function useInput(initValue :any = null) {
    const [ value, setValue ] = useState( initValue )
    const handler = useCallback(( event :ChangeEvent<HTMLInputElement> ) => {
        setValue( event.target.value )
    }, [])

    return [ value, handler ]
}