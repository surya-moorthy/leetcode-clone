import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, signInWithRedirect, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

const provider = new GithubAuthProvider();

const OAuth_URL = "https://leetcode-clone-86cb0.firebaseapp.com/__/auth/handler"

export const Signin = () => {
    const [email , SetEmail] = useState<string | null>("");
    const [password , Setpassword] = useState<string | null>("");
  async function onGithubSignin() {
    const gitAuth = getAuth();
    
    try {
        const result = await signInWithPopup(gitAuth,provider);
        const user = result.user;
        console.log(user);
    }
    catch(error) {
        alert("Error while signin with Github");
        console.error(error);
    }
}
   async function onGoogleSignin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
        await signInWithRedirect(auth,provider);
    }
    catch(error) {
        console.error("Error while SignIn:",error);
    }
   
   }
  const  SigninWithEmail = async (email : string) => {
      
     const actionCodeSettings = {
        url : "http:/localhost:3000",
     }
     const auth = getAuth();
        try {
            await sendSignInLinkToEmail(auth,email,actionCodeSettings);
        }
        catch(error) {
            alert("error while loggin with email");
            console.log("error while login with email:",error);
        }

   }
  
    return (
        <div className="flex justify-center space-x-4"> 
           <button onClick={onGithubSignin}>Github</button>
           <button onClick={onGoogleSignin}>Google</button> 
           <div>
               <input type="text" placeholder="email" onChange={(e) => { SetEmail(e.target.value)}}/>
               <button onClick={SigninWithEmail(email)}>Signup</button>
            </div>  
        </div>
    
    )
}

