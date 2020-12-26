import axios from 'axios';

export const authorization = key => {
    if (!localStorage.getItem('Authorization')) return "false";

    axios.get('http://localhost:3000/users', {
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    }).then(resp => {
        console.log(resp)
    });
}