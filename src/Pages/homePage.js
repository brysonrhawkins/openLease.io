import React, {useState} from "react";
import AppHeader from "../Components/Header/appHeader";
import SignedOutAppHeader from "../Components/Header/signedOutHeader";

function HomePage(){
    const isSignedIn = useState(false);

    return(
        <div>
            {isSignedIn ? (
                 <div>
                 <AppHeader/>
             </div>
            ):(
                <div>
                <SignedOutAppHeader/>
            </div>
            )}
        </div>
       
    )
}
export default HomePage