import { handleResponse } from '../../helpers/HandleResponse';
import { authHeader } from '../../helpers/AuthHeader';

export const userService = {
    postSubstraction,
    getUser,
    getEurostat
};

function postSubstraction(login, taskName, value) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ login, taskName, value })
    }
    return fetch('http://localhost:3000/subtractions', requestOptions).then(handleResponse);
}

function getUser(username) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }
    return fetch(`http://localhost:3000/users/${username}`, requestOptions).then(handleResponse);
}

function getEurostat(nationality){
    const requestOptions = {
        method: 'GET'
    }
    return fetch(`http://localhost:3000/eurostat/current?nationality=${nationality}`, requestOptions).then(handleResponse);
}