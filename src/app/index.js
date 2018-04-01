import React from 'react';
import { render } from 'react-dom';
import { Route, StaticRouter } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import { Root } from './components/Root';
import { User } from './components/User';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route path={"/"} component={Root}/>
                    <Route exact path={"/user/:id"} component={User}/>
                    <Route path={"/home"} component={Home}/>
                </div>
            </BrowserRouter>
        );
    }
}

render(<App/>, window.document.getElementById('app'));