# leetcode-clone

## Solve 
 1 . make the website to auth with their email and their own password

 
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("user loggin:", currentUser.email); // Debugging log
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);
