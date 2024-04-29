import { db } from "../firebase/firebase";
import { getAuth } from "firebase/auth";


function Auth() {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const [ isLoggedIn, setIsLoggedIn] = useState(getAuth);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsAuth(true);
            } else {
                setUser(null);
                setIsAuth(false);
            }
        });
  
        return () => unsubscribe();
    }, []);

    



}