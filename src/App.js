import React, {useContext, createContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/homePage';
import SignIn from './Pages/signIn';
import CreateAccount from './Pages/createAccount';
import FindLease from './Pages/findLease';
import PostLease from './Pages/postLease';
import ViewImage from './Pages/viewImage';
import Dashboard from './Pages/userDashboard';
import UserMessages from './Pages/userMessages';
import UserSettings from './Pages/userSettings';


// import firebase from "../src/Auth/Firebase.config.js";

function App() {
  console.log("Front End Router Render")
    // const userContext = React.createContext();
    // const userState = {
    //   isLoggedIn: false,
    // };


  // const [authUser, setAuthUser] = useState(null);

  // useEffect(()=>{
  //   firebase.auth().onAuthStateChanged(user=>{
  //     setAuthUser(user);
  //   });
  // },[]);

  return (
    <Router>
      <Routes>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/Sign-In' element={<SignIn/>}/>
        <Route path="/Account/Sign-Out" element={<SignIn/>}/>
        <Route path='/Create-Account' element={<CreateAccount/>}/>
        <Route path='/View-Listings' element={<FindLease/>}/>
        <Route path='/Create-Post' element={<PostLease/>}/>
        <Route path='/View-Image' element={<ViewImage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Messages' element={<UserMessages/>}/>
        <Route path='/Settings' element={<UserSettings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
