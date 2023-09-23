'use server'
import { LoginResult } from '@/models/Login';
import { UserLoginResponse } from '@/types/auth';
import { cookies } from 'next/headers'

export const isLogin = async () => {
    const cookieStore = cookies()
    const token = cookieStore.get('_r');

    return token ? true : false;
}

export const getJwtToken = async ()  => {
    const cookieStore = cookies()
    const token = cookieStore.get('_r');
    return token?.value;
}
export const setAuth = (data : LoginResult)  => {
    const cookieStore = cookies();
    const name = data.user.name;
    const email = data.user.email;
    const role = data.user.role.name;
    cookieStore.set('_r', data.jwt.access_token);
    cookieStore.set('name', name);
    cookieStore.set('email', email);
    cookieStore.set('role', role);
    cookieStore.set('expired', data.jwt.expires_in.toString());
    // cookieStore.set('user', JSON.stringify(data.user));
}
export const removeAuth = ()  => {
    const cookieStore = cookies()
    cookieStore.delete('_r');
    cookieStore.delete('expired');
    cookieStore.delete('user');
}

export const getRoleName = () => {
    const cookieStore = cookies()
    const role  = cookieStore.get('role');
    return role?.value;
}
export const getUserName = () => {
    const cookieStore = cookies()
    const name  = cookieStore.get('name');
    return name?.value;
}
export const getUserEmail = () => {
    const cookieStore = cookies()
    const email  = cookieStore.get('email');
    return email?.value;
}

export const AuthCheck = () => {
    const cookieStore = cookies()
    const user  = cookieStore.get('_r');
    return user ? true : false;

    // return user.user.name;
}

