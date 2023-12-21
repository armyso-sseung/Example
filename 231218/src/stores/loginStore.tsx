import {create} from "zustand";


const useLoginStore = create(( set ) => ({
    loginInfo: {
        id: "",
    },

    setLoginInfo: ( id :string ) => set(( state :any ) => ({
        loginInfo: { ...state.loginInfo, id }
    }))
}))


export default useLoginStore