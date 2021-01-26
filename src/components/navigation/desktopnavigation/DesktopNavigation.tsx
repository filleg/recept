import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'

export const DesktopNavigation = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useContext(UserContext)

    const displaySignInButton = () => {
        return authUser
            ? <Profile />
            : <span onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
    }

    return (
        <div className='desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={Logotype}
                alt={''} />
                <span onClick={() => history.push(RoutingPath.homeView)}>Products</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>Brands</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>News</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>Guideline</span>
                {displaySignInButton()}
        </div>
    )
}