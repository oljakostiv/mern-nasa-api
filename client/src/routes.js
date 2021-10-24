import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthPage} from "./pages/AuthPage/AuthPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";
import Home from "./pages/Home/Home";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path="/" exact>
                    {/*<MyCollectionsPage />*/}
                </Route>
                <Route path="/" exact>
                    <CollectionsPage />
                </Route>
                <Redirect to="/" />
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
};
