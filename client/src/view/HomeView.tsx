import { useEffect, useState } from 'react'

export const HomeView = () => {
    const [number, setNumber] = useState(0)

  /*  useEffect(() => {
        alert('Homeview blablabla')
    }, [number])
*/
    return (
        <div>
            <h1>homeview</h1>
        </div>
    )
}
