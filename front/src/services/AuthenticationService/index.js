import { BehaviorSubject } from 'rxjs'
import { handleResponse } from '../../helpers/HandleResponse'
import api from '../../utils/api';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))

export const authenticationService = {
    login,
    logout,
    register,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

function login(login, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password })
    };

    return fetch(api.auth, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function register(login, password, email, nationality) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password, email, nationality })
    }

    return fetch(api.users, requestOptions)
        .then(handleResponse)
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}