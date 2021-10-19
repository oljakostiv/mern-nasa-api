import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthPage} from "./pages/AuthPage/AuthPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/collection" exact>
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
