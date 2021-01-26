import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    return (
        <div className='profileWrapper'>
            <img className='profileImg' src={'https://thispersondoesnotexist.com/image'} alt={''}></img>
            {authUser.username}
            <div className='profileDropdown'>
                <span> alt 1 </span>
                <span> alt 2 </span>
                <span> alt 3 </span>
            </div>
        </div>
    )
}
