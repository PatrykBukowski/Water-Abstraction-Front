import React from 'react';
import { userService } from '../../services/UserService'
import { authenticationService } from '../../services/AuthenticationService'
import AddSubtraction from '../../components/AddSubtarction'
import SubtractionSummary from '../../components/SubtractionSummary'
import SubtractionList from '../../components/SubtractionList'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            user: null,
        };
    }

    componentDidMount() {
        userService.getUser(this.state.currentUser.username).then(user => this.setState({ user }));
    }

    render() {
        const { currentUser, user } = this.state;

        const reload = () => userService.getUser(this.state.user.login).then(user => this.setState({ user }));

        return (
            <div>
                { user && console.log(user) }
                {user &&
                <div>
                    <SubtractionSummary user={user} />
                    <AddSubtraction user={user} reload={reload} />
                    <SubtractionList list={user.subtractions}/>
                </div>
                }
            </div>
        );
    }
}
export default HomePage;