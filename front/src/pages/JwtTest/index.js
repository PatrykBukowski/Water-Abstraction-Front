import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

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

const JwtTest = () => {
    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [foods, setFoods] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const getJwt = async () => {
        await axios.post(`${apiUrl}/auth`, {
            login: "login11",
            password: "password1",
        }).then((response) => {
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token);
            setJwt(response.data.token);
            localStorage.setItem('login', 'jestILogin')
        }, (error) => {
            localStorage.clear();
        })
    };
    const getFoods = async () => {
        try {
            const { data } = await axios.get(`${apiUrl}/foods`);
            setFoods(data);
            setFetchError(null);
        } catch (err) {
            setFetchError(err.message);
        }
    };
    return (
        <>
            <section style={{ marginBottom: '10px' }}>
                <button onClick={() => getJwt()}>Get JWT</button>
                {jwt && (
                    <pre>
                        <code>{jwt}</code>
                    </pre>
                )}
            </section>
            <section>
                <button onClick={() => getFoods()}>
                    Get Foods
          </button>
                <ul>
                    {foods.map((food, i) => (
                        <li>{food.description}</li>
                    ))}
                </ul>
                {fetchError && (
                    <p style={{ color: 'red' }}>{fetchError}</p>
                )}
            </section>
        </>
    );
}
export default JwtTest
