import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, name, surname, patronymic, typeUserId) => {
    const {data} = await $host.post('api/user/registration', {email, password, name, surname, patronymic, typeUserId})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
// export const registration = async (email, password, name) => {
//     const {data} = await $host.post('api/user/registretion', {email, password, name, typeUserId: 10})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/authorization', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
// export const login = async (email, password) => {
//     const {data} = await $host.post('api/user/autorization', {email, password})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }


export const check = async () => {
    const {data} = await $authHost.get('api/user/ifAuthorization' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/ifAuthorization' )
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }