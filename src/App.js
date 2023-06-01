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
        <Route path='brysonrhawkins.github.io/Home' element={<HomePage/>}/>
        <Route path='brysonrhawkins.github.io/Sign-In' element={<SignIn/>}/>
        <Route path="brysonrhawkins.github.io/Account/Sign-Out" element={<SignIn/>}/>
        <Route path='brysonrhawkins.github.io/Create-Account' element={<CreateAccount/>}/>
        <Route path='brysonrhawkins.github.io/View-Listings' element={<FindLease/>}/>
        <Route path='brysonrhawkins.github.io/Create-Post' element={<PostLease/>}/>
        <Route path='brysonrhawkins.github.io/View-Image' element={<ViewImage/>}/>
        <Route path='brysonrhawkins.github.io/Dashboard' element={<Dashboard/>}/>
        <Route path='brysonrhawkins.github.io/Messages' element={<UserMessages/>}/>
        <Route path='brysonrhawkins.github.io/Settings' element={<UserSettings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
