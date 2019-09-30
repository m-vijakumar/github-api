import React,{useState , useEffect} from 'react';
import './App.css';
import Github from './components/Github';
import Header from './components/Header';
import Auth0Lock from 'auth0-lock';

function App() {

 const [idtoken ,setIdtoken ]=useState();
 const [profile ,setProfile ]= useState({profile:""});
  
  const defaultProps ={

    "domain": "munikotivijaykumar.auth0.com",
  "clientId": "94k2VX87HK0WLG4jZFnJPl9nLRo3UzhU"

  }


  var lock = new Auth0Lock(
    defaultProps.clientId,
    defaultProps.domain
    )
    const kk =() =>{

      lock.on('authenticated',(authResult) =>{
        console.log(authResult);

        var token = JSON.stringify(authResult.idToken);
        setIdtoken(token)
        console.log(idtoken)

        var kkk ={name:authResult.idTokenPayload.nickname,
          email:authResult.idTokenPayload.email}
        setProfile(kkk)
        console.log(profile)

        })

    };

  useEffect( () =>{
        
              kk();
            
          })

          

 

  const showLock =() =>{
      lock.show()
  }
  return (
    <div className="App">
    <Header  onLogin = { () => showLock() } />
        <Github />
    </div>
  );
}

export default App;
