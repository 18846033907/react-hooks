import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Inbox from './components/Inbox';
import Starred from './components/Starred';
import SendEmail from './components/SendEmail';
import Drafts from './components/Drafts';

const SideRoute = (
    <Switch>
        <Route path="/Inbox" component={Inbox} />
        <Route path="/Starred" component={Starred} />
        <Route path="/SendEmail" component={SendEmail} />
        <Route path="/Drafts" component={Drafts} />
    </Switch>
)
            
    

export default SideRoute;
