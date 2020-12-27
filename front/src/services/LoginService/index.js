import axios from 'axios';

const apiUrl = 'http://localhost:3000'

axios.interceptors.request.use(
    config => {
        const { origin } = new URL(config.url);
        const allowedOrigins = [apiUrl];
        const token = localStorage.getItem('token');
        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const auth = (login, password, isLogged) => {
    axios.post(`${apiUrl}/auth`, { login: login, password: password, })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('login', login)
            isLogged(true)
        }, (error) => {
            localStorage.clear();
        })
}

export const isLogged = () => {
    if (localStorage.getItem('token') !== undefined) return false
    else {
        let ret;
        axios.get(
            `${apiUrl}/users`,
        )
            .then((response) => {
                console.log(response.status === 200)
                ret = response.status === 200
            }, (error) => {
                console.log(error)
                localStorage.clear();
                ret = false
            })
        console.log(ret)
        return true;
    }
}