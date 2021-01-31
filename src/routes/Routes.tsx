import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import RoutingPath from './RoutingPath'
import { SignInView } from '../view/SignInView'
import { BrandsView } from '../view/navigationtabsview/brands/BrandsView'
import { ContactView } from '../view/navigationtabsview/contact/ContactView'
import { NewsView } from '../view/navigationtabsview/news/NewsView'
import { ShopView } from '../view/navigationtabsview/shop/ShopView'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react' 

export const Routes = (props: { children: React.ReactChild }) => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const { children } = props

    useEffect(() => {
        if (localStorage.getItem('user')){setAuthUser({username: localStorage.getItem('user') })}

    },[])    

    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route exact path={RoutingPath.signInView} component={SignInView} />
                <Route exact path={RoutingPath.brandsView} component={BrandsView} />
                <Route exact path={RoutingPath.contactView} component={ContactView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route component={HomeView}></Route>
            </Switch>
        </BrowserRouter>
    )
}
