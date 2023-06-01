import React from "react";
import AppHeader from "../Components/Header/appHeader";
import Sidebar from "../Components/Messages-Sidebar/Sidebar";

function UserMessages(){
    return(
        <div>
            <AppHeader/>
            <div>
                <Sidebar/>
            </div>
        </div>
    )
}

export default UserMessages;

//one large pagination page where the side menu applies the query filters
//when you click on a message, pagination item that is selected is given 
//larger size as opposed to taking the user to a different page. From here
//if the user chooses to reply, it will create an active conversations node.