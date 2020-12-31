import { useState, useEffect } from 'react';
import { userService } from '../../services/UserService'
import { authenticationService } from '../../services/AuthenticationService'
import MainComponent from '../../components/MainComponent';

const HomePage = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        userService.getUser(authenticationService.currentUserValue.username).then(result => setUser(result))
    }, [])

    const reload = () => userService.getUser(user.login).then(result => setUser({ result }));

    return (
        <>
            {user &&
                <MainComponent user={user} reload={reload} />
            }
            </>
    );
}
export default HomePage;