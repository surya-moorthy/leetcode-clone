import { useEffect, useState } from "react"
import { onGithubSignin, onGoogleSignin } from "./utils/auth"
import { getAuth, onAuthStateChanged, User } from "firebase/auth";


export const Signin = () => {
    const [user,setUser] = useState<User | null>(null);
   
    useEffect(()=>{
        const auth = getAuth();
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
             if (currentUser) {
                console.log("user loggin");
                setUser(currentUser);
             } else {
                setUser(null);
             }
        });
        
        return () => unsubscribe();
    },[]);
    return (
       <div>
             <div>
            
             </div>
            <div className="flex justify-center space-x-4"> 
               <button onClick={onGithubSignin}>Github</button>
               <button onClick={onGoogleSignin}>Google</button> 
            </div>
         <div>
              { user?  user.email  : "user not loggin"}
         </div>
       </div>
    
    )
}

