import React,{useState , useEffect} from 'react';
import './App.css';
import Github from './components/Github';
import Header from './components/Header';
import Auth0Lock from 'auth0-lock';


function App() {
 const [userData, setUserData] = useState([]);
 const [idtoken ,setIdtoken ]=useState("");
 const [profile ,setProfile ]= useState({});
  
  const defaultProps ={

    "domain": "munikotivijaykumar.auth0.com",
  "clientId": "94k2VX87HK0WLG4jZFnJPl9nLRo3UzhU"

  };

  var lock = new Auth0Lock(
    defaultProps.clientId,
    defaultProps.domain
    )

    const kkkk = async () =>{
      await kk();
    }

    const kk = async () =>{

      await lock.on('authenticated',(authResult) =>{
        console.log(authResult);


        lock.getProfile(authResult.accessToken, (error,profile)=>{

          if(error){
            console.log(error);
          }

          // console.log(profile)
          setprofiles(authResult.accessToken,profile)
        })

         })

         
    };

    const setprofiles = (idToken,profile) =>{
      localStorage.setItem('idToken',idToken)
      localStorage.setItem("profile",JSON.stringify(profile))
      setProfile(JSON.parse(localStorage.getItem("profile")));
      setIdtoken(localStorage.getItem('idToken'))
    }

    const getProfiles= ()=>{
      if(localStorage.getItem("idToken")!= null){
      setProfile(JSON.parse(localStorage.getItem("profile")));
      setIdtoken(localStorage.getItem('idToken'))
      
      }
    }
  const callAPI = async () => {
    const resp = await fetch("https://api.github.com/users/munikotivijaykumar");
    const data = await resp.json();
    setUserData(data);
  };

  const logout =()=>{

    setProfile({})
    setIdtoken("");
    localStorage.removeItem("idToken");
    localStorage.removeItem("profile");
  }

  useEffect(() =>{
    
    getProfiles();
    callAPI();
    // localStorage.setItem("profile",JSON.stringify(profile))
  },[]);

  const showLock = () =>{

     lock.show()
      kkkk();
  }
  

  if(idtoken){
    return(
      <div className="App">
        <Header 
       
        logger={logout} 
        log ={"Logout"}
         />
        <Github />
        {JSON.stringify(userData)}
        
    </div>
    )
  }else{
   
  

  return (
    <div className="App">
        <Header logger={showLock}
        
        log ={"Login"}
        
        />
       <h1 style={{ textAlign :'center' ,position:' center'}}> click login</h1>
        
        
    </div>
  );
  }

  }
export default App;
