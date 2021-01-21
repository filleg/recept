import { useState } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const SignInView = () => {
    const history = useHistory()
    const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({username: '', password:'' })


    const signIn = () => {
        history.push(RoutingPath.homeView)
        localStorage.setItem('user', loginCredentials.username)
    }

    return (
        <div>
            <form>
                <input  
                        placeholder='username'
                        onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br />
                <input 
                        placeholder='password'
                        onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value })} /> <br />
                <button onClick={() => signIn()}>Sign in</button>        
            </form>

        </div>
    )
}
