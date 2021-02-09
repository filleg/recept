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
import { SettingsView } from '../view/authenticatedview/SettingsView'

export const Routes = (props: { children: React.ReactChild }) => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const { children } = props

    const blockRouteIfAuthenticated = (allowedView: React.FC, notAllowedView: React.FC) => {
        return !authUser ? allowedView : notAllowedView
    }

    const authenticationRequired = (allowed: React.FC, notAllowed: React.FC) => {
        return authUser ? allowed : notAllowed
    }

    useEffect(() => {
        if (localStorage.getItem('user')){setAuthUser({username: localStorage.getItem('user') })}

    },[])    

    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView, HomeView)} />
                <Route exact path={RoutingPath.brandsView} component={BrandsView} />
                <Route exact path={RoutingPath.contactView} component={ContactView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route exact path={RoutingPath.settingsView} component={authenticationRequired(SettingsView, SignInView)} />
                <Route component={HomeView}/>
            </Switch>
        </BrowserRouter>
    )
}
