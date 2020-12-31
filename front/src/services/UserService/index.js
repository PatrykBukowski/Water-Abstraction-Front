import { handleResponse } from '../../helpers/HandleResponse';
import { authHeader } from '../../helpers/AuthHeader';


const postSubstraction = (login, taskName, value) => {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ login, taskName, value })
    }
    return fetch('http://localhost:3000/subtractions', requestOptions).then(handleResponse);
}

const getUser = username => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }
    return fetch(`http://localhost:3000/users/${username}`, requestOptions).then(handleResponse);
}

const getEurostat = nationality => {
    const requestOptions = {
        method: 'GET'
    }
    return fetch(`http://localhost:3000/eurostat/current?nationality=${nationality}`, requestOptions).then(handleResponse);
}

export const userService = {
    postSubstraction,
    getUser,
    getEurostat
};