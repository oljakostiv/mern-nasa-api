import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LinksPage} from './pages/LinksPage/LinksPage';
import {AuthPage} from "./pages/AuthPage/AuthPage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                {/*<Route path="/search" exact>*/}
                {/*    <SearchPage />*/}
                {/*</Route>*/}
                {/*<Route path="/collection" exact>*/}
                {/*    <CollectionPage />*/}
                {/*</Route>*/}
                {/*<Route path="/collection/create" exact>*/}
                {/*    < />*/}
                {/*</Route>*/}
                {/*<Route path="collection/detail/" exact>*/}
                {/*    < />*/}
                {/*</Route>*/}
                <Redirect to="/collection" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
