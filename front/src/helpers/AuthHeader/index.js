import { authenticationService } from '../../services/AuthenticationService';

export function authHeader() {
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return {
            Authorization: `Bearer ${currentUser.token}`,
            'Content-Type': 'application/json'
        };
    } else {
        return {};
    }
}