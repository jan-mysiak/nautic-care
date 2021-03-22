import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '../../../store/slices/';
import { useFirebaseContext } from '../Firebase';

export default function useSession() {
    const { authUser } = useSelector(s => s.session);
    const firebase = useFirebaseContext();
    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(true);
    const listener = React.createRef();

    // Update auth status
    React.useEffect(() => {
        if (!listener.current) {
            listener.current = firebase.auth.onAuthStateChanged(user => {
                dispatch(setAuthUser(user ? true : false));
            });
        }

        return () => listener.current && listener.current();
    }, [listener, firebase, dispatch]);

    // Loading while auth status hasn't been checked
    React.useEffect(() => {
        if (authUser !== null) {
            setLoading(false);
        }
    }, [authUser]);

    return { loading, authUser };
}
