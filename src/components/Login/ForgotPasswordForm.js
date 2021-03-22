import React from 'react'
import PropTypes from 'prop-types'

import {
    Button, Typography, Spacer, FlexContainer, Icon, TextInput, useFirebaseContext, FadeGrowIn
} from '../_shared/';
import { toastLoginSucces, toastLoginError } from './toasts';
import FormHeader from './FormHeader';
import { FaEnvelope } from 'react-icons/fa';

export default function ForgotPasswordForm(props) {
    const firebase = useFirebaseContext();
    const [email, setEmail] = React.useState("");

    // Only showing toasts for now
    const resetPassword = () => {
        firebase.resetPassword(email)
            .then(res => {
                toastLoginSucces("Ditt lösenord har återställts. Glöm inte att kolla skräpposten.");
            })
            .catch(err => {
                console.error(err);
                toastLoginError(err.code);
            })
    }

    const isValid = !!email;

    return (
        <FadeGrowIn>
            <FlexContainer
                vertical width="45ch"
                background="rgba(256, 256, 256, 0.6)"
                border="solid 3px white"
            >
                <Spacer padding={[2]}>
                    <Spacer margin={[0, 0, 4, 0]}>
                        <FormHeader title="Återställ lösenord" />
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

                    <Spacer padding={[0, 0, 7, 0]}>
                        <Typography
                            text="Information om hur du återställer ditt lösenord skickas till din e-mail"
                            color="dark"
                            size="1"
                            weight="400"
                            center
                        />
                    </Spacer>

                    <FlexContainer row justifyContent="center">
                        <Button text="Tillbaka" onClick={props.goBack} />

                        <Spacer margin={[0, 1, 0, 0]} />

                        <Button primary text="Återställ" disabled={!isValid} onClick={resetPassword} />
                    </FlexContainer>
                </Spacer>
            </FlexContainer>
        </FadeGrowIn>
    )
}

ForgotPasswordForm.propTypes = {
    goBack: PropTypes.func.isRequired,
}
