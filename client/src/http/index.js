import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:4060/'
})
console.log()

const $authHost = axios.create({
    baseURL: 'http://localhost:4060/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}