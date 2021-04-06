import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import AboutUs from './components/pages/about/about.js';
import ContactUs from './components/pages/contact_us/contact_us.js';
import Error from './components/error';

class App extends React.Component {
    render(){
        return (
                <main>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={AboutUs} />
                        <Route path="/contact_us" component={ContactUs} />
                        <Route component={Error}/>
                    </Switch>
                </main>
        );
    }
}

export default App;
