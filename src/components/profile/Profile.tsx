import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const Profile = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    return (
        <div>
            <img src={'https://thispersondoesnotexist.com/image'} alt='' width="50"></img>
        </div>
    )
}
