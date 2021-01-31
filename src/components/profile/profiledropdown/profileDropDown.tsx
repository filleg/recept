import './profileDropDown.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'


export const ProfileDropDown = () => {
    const history = useHistory()
    const [authUser, setAuthUser ] = useContext(UserContext)

    const logout = () => {
        setAuthUser(false)
        localStorage.removeItem('user')
        history.push(RoutingPath.signInView)
    }

    return (
        <div className='profileDropdown'>
            <span> alt 1 </span>
            <span> alt 2 </span>
            <span onClick={() => logout()}> Sign out </span>
    </div>
    )
}
