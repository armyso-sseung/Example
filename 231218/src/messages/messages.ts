type MessageType = {
    [ key :string ] :string
}


export const TitleMessage :MessageType = {
    plateer: "PLATEER",
    login: "로그인",
    register: "회원가입",
    registerTitle: "계정을 생성하세요."
}

export const TypeMessage :MessageType = {
    password: "password",
    text: "text",
    email: "email",
    empty: "",
}

export const RegisterMessage :MessageType = {
    id: "아이디",
    password: "패스워드",
    rePassword: "패스워드 확인",
    name: "이름",
    address: "주소",
    addressDetail: "상세 주소",
    storeName: "스토어 별칭",
}

export const LoginMessage :MessageType = {
    loginBtn: "로그인하기",
    personRegister: "구매자 회원가입",
    sellerRegister: "판매자 회원가입",
}

export const PostcodeMessage :MessageType = {
    open: "주소찾기",
    close: "닫기",
    apply: "적용"
}

export const AlertMessage :MessageType = {
    require: "필수 값을 입력해주시기 바랍니다.",
    password: "비밀번호가 일치하지 않습니다.",
    login: "아이디 또는 패스워드를 입력해주시기 바랍니다.",
}