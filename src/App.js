import React from 'react';
import { Router, Route , Switch } from 'react-router-dom'; // replace router expect BrowserRouter Because we use history
import history from './history'
import Home from './Pages/Home/Home'
import UserProfile from './Pages/UserProfile/UserProfile';
const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/user-profile/:username" component={UserProfile}/>
                </Switch>
            </Router>
        </div>
    );
}
export default App;