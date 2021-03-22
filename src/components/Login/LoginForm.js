import React from 'react'
import PropTypes from 'prop-types'

import { FlexContainer, Spacer, Icon, TextInput, Button, useFirebaseContext, FadeGrowIn } from '../_shared';
import { FaKey, FaEnvelope } from 'react-icons/fa';
import { toastLoginError } from './toasts';
import FormHeader from './FormHeader';

export default function LoginForm(props) {
    const firebase = useFirebaseContext();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signIn = () => {
        firebase.signInEmailPassword(email, password)
            .catch(err => {
                console.error(err);
                toastLoginError(err.code);
            })
    }

    const isValid = !!email && !!password;

    return (
        <FadeGrowIn>
            <FlexContainer
                vertical width="45ch"
                background="rgba(256, 256, 256, 0.6)"
                border="solid 3px white"
            >
                <Spacer padding={[2]}>
                    <Spacer margin={[0, 0, 4, 0]}>
                        <FormHeader title="Inloggning" />
                    </Spacer>

                    <Spacer margin={[0, 0, 1, 0]}>
                        <FlexContainer row alignItems="center">
                            <Icon icon={FaEnvelope} background="dark" width="2.2rem" bordered />

                            <Spacer margin={[0, 0, 0, 0.4]} />

                            <TextInput
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Mailadress.."
                                value={email}
                            />
                        </FlexContainer>
                    </Spacer>

                    <Spacer margin={[0, 0, 8, 0]}>
                        <FlexContainer row alignItems="center">
                            <Icon icon={FaKey} background="dark" width="2.2rem" bordered />

                            <Spacer margin={[0, 0, 0, 0.4]} />

                            <TextInput
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Lösenord.."
                                value={password}
                                type="password"
                            />
                        </FlexContainer>
                    </Spacer>

                    <FlexContainer justifyContent="center">
                        <Button text="Logga in" primary disabled={!isValid} onClick={signIn} />

                        <Spacer margin={[0, 0.5]} />

                        <Button text="Glömt lösenord" onClick={props.forgotPassword} />
                    </FlexContainer>
                </Spacer>
            </FlexContainer>
        </FadeGrowIn>
    )
}

LoginForm.propTypes = {
    forgotPassword: PropTypes.func.isRequired,
}
