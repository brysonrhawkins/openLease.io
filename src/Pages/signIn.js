import React, {useState} from "react";
import HomePage from "./homePage";
import NewAccount from "../Components/Inputs/Create-Account/createAccount";
import SignedOutAppHeader from "../Components/Header/signedOutHeader";

function SignIn(){
    const isSignedIn = useState(false);

    return(
        <div>
            {isSignedIn ? (
                <div>
                    <SignedOutAppHeader/>
                    <NewAccount/>
                    </div>
                
            ):(
                <HomePage/>
            )}
        </div>
    )
}   

export default SignIn;