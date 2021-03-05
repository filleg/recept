import http from '../BackendAPI'
import { iCreateNewUser } from '../../interface/Interface'

const createUser = (data: iCreateNewUser) => {
    return http.post('/user', data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    createUser 
}