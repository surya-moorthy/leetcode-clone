# leetcode-clone

## Solve 
 1. make the website to auth with their email and their own password.
 2. learn React state Management and its library Recoil , to how to use it like a pro.
 3. design the frontend.



the below verifies the state whether the user is loggin or not
``` 
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("user loggin:", currentUser.email);
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);
```