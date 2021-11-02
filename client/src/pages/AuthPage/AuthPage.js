import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/massege.hook";

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/registration', 'POST', {...form});
            message(data.message);
        } catch (e) {
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId);
        } catch (e) {
        }
    }

    return (
        <div className="row">
            <div className="col offset-s3 s6 grid m5rm">
                <h1 className='text-color center-align db'>Mars Rover Photos</h1>
                <div className="card blue-grey darken-2">
                    <div className="card-content white-text center-block">
                        <span className="card-title">Authorisation</span>
                        <form action="/" method="post" encType="multipart/form-data">
                            <div className="input-field">
                                <input
                                    placeholder="Enter email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Enter password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                                <span><i>(at least one: digit, lower&upper case, symbol)</i></span>
                            </div>

                        </form>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn deep-purple lighten-2"
                            style={{marginRight: 10}}
                            onClick={loginHandler}
                            disabled={loading}
                        >Log in</button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
