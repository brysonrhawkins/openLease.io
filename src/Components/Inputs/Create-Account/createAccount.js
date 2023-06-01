import { React, useEffect } from "react";
import firebase from "../../../Auth/Firebase.config.js";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import "./createAccount.css";

function NewAccount() {
  const db = firebase.firestore();

  const uiConfig = {
    signInSuccessUrl: "/Home",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    tosUrl: "terms-of-service",
    privacyPolicyUrl: "privacy-policy",
  };

  const auth = firebase.auth();

  useEffect(() => {
    if (!firebaseui.auth.AuthUI.getInstance()) {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", uiConfig);
    }
  }, []);

  function gotUID() {
    return new Promise((res, rej) => {
      const userId = auth.currentUser.uid;
      const data = {
        firstName: "",
        lastName: "",
        profilePhoto: "",
        city: "",
        messages: [],
        listings: [],
      };
      res(db.doc(`UserData/${userId}`).set(data));
      rej(console.error());
    });
  }

  async function createDoc() {
    await gotUID();
  }

  createDoc();

  return (
    <div>
      <div className="firebase-ui-container">
      <div id="firebaseui-auth-container"></div>
      </div>
    </div>
  );
}

export default NewAccount;
