import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import IndexEvents from "./Events/IndexEvents";

import HeaderTemplate from "./HeaderTemplate";
import HomeBanner from "./Events/HomeBanner";
import TimeArea from "./Events/TimeArea";
import Schedule from "./Events/Schedule";
import ContactInfo from "./ContactInfo";
import PricesBox from "./PricesBox";
import Footer from "./Footer";
import WelcomeMessage from "./WelcomeMessage";
import Artists from "./Events/Artists";
import Media from "./Events/Media";
import { BrowserRouter as Router,Route,Switch,MemoryRouter } from 'react-router-dom';

import Routes from '../Routes';
import MoreEvents from "./Events/MoreEvents";
import Index from "./Index";
import EventDesc from "./Events/EventDesc";
import MoreArtists from "./Artists/MoreArtists";
import MoreMedias from "./Media/MoreMedias";
import Login from '../../coreui/src/views/pages/login/Login';
import Register from '../../coreui/src/views/pages/register/Register';

 class App extends Component {
    render() {
        return (


                <Router>
                    <Switch>
                        <Route path="/"  component={Index}  exact={true}/>
                        <Route path="/MoreEvents" component={MoreEvents} exact={true} />
                        <Route path="/EventDesc/:id" component={EventDesc} exact={true} />
                        <Route path="/MoreArtists" component={MoreArtists} exact={true} />
                        <Route path="/MoreMedias" component={MoreMedias} exact={true} />
                        <Route path="/login" component={Login} exact={true} />
                        <Route path="/register" component={Register} exact={true} />
                    </Switch>
                </Router>

        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}