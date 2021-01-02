import { handleResponse } from '../../helpers/HandleResponse';
import { authHeader } from '../../helpers/AuthHeader';
import api from '../../utils/api';


const postSubstraction = (login, taskName, value) => {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ login, taskName, value })
    }
    return fetch(api.subtraction, requestOptions).then(handleResponse);
}

const getUser = username => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }
    return fetch(api.users + username, requestOptions).then(handleResponse);
}

const getEurostat = nationality => {
    const requestOptions = {
        method: 'GET'
    }
    return fetch(`${api.eurostat}current?nationality=${nationality}`, requestOptions).then(handleResponse);
}

const deleteSubtraction = (taskId, login) => {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
        body: JSON.stringify({ taskId, login })
    }
    return fetch(api.subtraction, requestOptions).then(handleResponse)
}

export const userService = {
    postSubstraction,
    getUser,
    getEurostat,
    deleteSubtraction,
};