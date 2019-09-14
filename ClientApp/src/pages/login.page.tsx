import React from 'react';
import { Redirect } from 'react-router';
import LoginService from '../services/login.service';

class LoginPage extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);

        this.state = { password: '', isWrongPassword: false, isLoggedIn: false};
    }

    render() {
        if (LoginService.isLoggedIn()) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.login}>
                    <label htmlFor="password">
                        Password:
                        <input id="password" value={this.state.password} onChange={this.handleChange}/>
                        {this.state.isWrongPassword ? <p> Wrong password</p> : null }
                        {this.state.isLoggedIn ? <p> Logged in</p> : null }
                    </label>
                    <button type="submit">Ok</button>
                </form>
            </div>
        );
    }

    login = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const password = this.state.password;
            await LoginService.logIn(password);
            this.setState({isLoggedIn: true});
        }
        catch {
            this.setState({isWrongPassword: true})
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.isWrongPassword) {
            this.setState({isWrongPassword: false});
        }
        this.setState({password: e.target.value});
    }
}



interface LoginProps {
    //isLoggedIn: () => boolean;
}

interface LoginState {
    password: string;
    isWrongPassword: boolean;
    isLoggedIn: boolean;
}

export default LoginPage;