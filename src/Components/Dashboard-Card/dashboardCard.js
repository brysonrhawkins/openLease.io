import React from "react";

function DashboardCard(){

    const userObject = {
        userName: "BrysonHawkins14",
        firstName: 'Bryson',
        lastName: "Hawkins",
        userID: '123123',
        city: 'American Fork',
        photoUrl: '',
        tier: "Landlord",
        properties: 4,
        postings: 2,
        rating: 5,
    }

    return(
        <div>
            <div>
                <h4>{userObject.firstName} {userObject.lastName}</h4>
                <h5>{userObject.city}</h5>
                <h5>{userObject.tier}</h5>
            </div>
            <div>
                <h2>Listings :</h2>
            </div>
        </div>
    )
}

export default DashboardCard;