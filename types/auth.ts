export interface Userlogin {
    id: number;
    name: string;
    email: string;
    role: Role | null;
}
export interface UserLoginResponse {
    jwt: Jwt;
    user: Userlogin;
}



export interface FormLogin {
    email: string;
    password: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface Jwt {
    access_token: string;
    token_type: string;
    expires_in: number;
}

