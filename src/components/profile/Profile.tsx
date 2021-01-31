import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'
import { ProfileDropDown } from './profiledropdown/profileDropDown'

export const Profile = () => {
    const [authUser,] = useContext(UserContext)
    return (
        <div className='profileWrapper'>
            <img className='profileImg' src={'https://thispersondoesnotexist.com/image'} alt={''}></img>
            {authUser.username}
            <ProfileDropDown />
        </div>
    )
}
