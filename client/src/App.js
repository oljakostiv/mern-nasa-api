import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';
import {Navbar} from './components/NavBar/NavBar';
import 'materialize-css';
import {Loader} from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    if (!ready) {
        return <Loader/>
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                <div className='backend'>
                    {isAuthenticated && <Navbar/>}
                    <div>{routes}</div>
                </div>
                <Footer/>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
