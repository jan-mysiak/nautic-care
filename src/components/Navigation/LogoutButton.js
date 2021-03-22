import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setAuthUser } from '../../store/slices';
import { Button } from '../_shared';
import { useFirebaseContext } from '../_shared/Firebase';

export default function LogoutButton() {
    const history = useHistory();
    const firebase = useFirebaseContext();
    const dispatch = useDispatch();

    const signOut = () => {
        firebase.signOut()
            .then(() => {
                dispatch(setAuthUser(false));
                history.push("/");
            });
        // handle errors?
    }

    return (
        <Button onClick={signOut} text="Logga ut" />
    )
}
