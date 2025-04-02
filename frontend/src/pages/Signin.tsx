import { useEffect } from "react"
import { onGithubSignin, onGoogleSignin } from "./utils/auth"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../store/atoms/user";


export const Signin = () => {
    const setUser = useSetRecoilState(userAtom);
   
    useEffect(()=>{
        const auth = getAuth();
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
             if (currentUser && currentUser.email) {
                console.log("user loggin");
                setUser({
                    loading : false,
                    user : {
                        email : currentUser.email 
                    }
                });
             } else {
                setUser({
                    loading : false,
                });
             }
        });
        
        return () => unsubscribe();
    });
    return (
       <div>
             <div>
            
             </div>
            <div className="flex justify-center space-x-4"> 
               <button onClick={onGithubSignin}>Github</button>
               <button onClick={onGoogleSignin}>Google</button> 
            </div>
         <div>
              
         </div>
       </div>
    
    )
}

