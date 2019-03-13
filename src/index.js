import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login';
import LayOut from './components/layout';
import {BrowserRouter as Router} from "react-router-dom";


const AppContext = React.createContext({
    transition:()=>{},
    logState: 'logout'
});
const App = () =>{
    const [logState, setLogState] = useState('logout');
    const transition = (event) => {
        setLogState(event);
    }
    return (
        <AppContext.Provider value={{transition,logState}}>
                <div>
                    {
                        logState === 'login' ? 
                        <LayOut />: 
                        <Login transition={transition} />
                    } 
                
                </div>
        </AppContext.Provider >
    );
}

const Root=()=>{
    return (
        <Router>        
            <App/>      
        </Router>
    );
}
export default AppContext;



ReactDOM.render(<Root />, document.getElementById('root'));

