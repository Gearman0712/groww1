import React ,{useState,useEffect}from 'react'
import App from './App';
import Details from './Details';
import Error from './Error';
import { NavigationBar } from './NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function FinalApp() {
    const  [currentBankList , setCurrentBankList] = useState([]);

    return (
        <>
        <NavigationBar />
        <main>
        <Switch >
             <Route
                   exact  path={`/all-banks`}
                     render={(props) => (
                <App {...props} changeCurrentBankList ={(cb)=>{ setCurrentBankList(cb) } } isAuthed={true} />
            )}
            />
        
            <Route
                 exact  path="/bank-details/:ifsc"
                     render={(props) => (
                <Details {...props} currentTempBankList ={ currentBankList}  isAuthed={true} />
            )}
            />
            
            <Route  component={Error} isAuthed={true} /> 

        </Switch>
        </main> 
        </>
    )
}

export default FinalApp;
