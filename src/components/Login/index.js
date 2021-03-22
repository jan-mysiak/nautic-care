import React from 'react'
import { useSelector } from 'react-redux';
import { FlexContainer } from '../_shared/Layout';
import ForgotPasswordForm from './ForgotPasswordForm';
import LoginForm from './LoginForm';

export default function LoginPage(props) {
    const { authUser } = useSelector(s => s.session);
    const [forgotPassword, setForgotPassword] = React.useState(false);

    // Redirect if user already signed in
    React.useEffect(() => {
        if (authUser) {
            props.history.push("/jobs")
        }
    }, [authUser, props]);

    return (
        <FlexContainer justifyContent="center" alignItems="center" height="100%">
            {forgotPassword
                ? <ForgotPasswordForm goBack={() => setForgotPassword(false)} />
                : <LoginForm forgotPassword={() => setForgotPassword(true)} />
            }
        </FlexContainer>
    )
}
