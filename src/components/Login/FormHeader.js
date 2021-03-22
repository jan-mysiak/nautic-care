import React from 'react'
import PropTypes from 'prop-types'
import { FlexContainer, Spacer, Typography } from '../_shared'

export default function FormHeader(props) {
    return (
        <>
            {/* <Typography
                text="NAUTIC CARE"
                color="accent"
                size="3.5"
                weight="300"
                spacing="-3"
                center
            /> */}

            <FlexContainer justifyContent="center">
                <Typography
                    text="NAUTIC"
                    color="accent"
                    size="3.5"
                    weight="300"
                    spacing="-3"
                />

                <Spacer margin={[0, 0.5]} />

                <Typography
                    text="CARE"
                    color="dark"
                    size="3.5"
                    weight="300"
                    spacing="-3"
                />
            </FlexContainer>

            <Typography
                text={props.title}
                color="dark"
                size="1.5"
                weight="300"
                spacing="2"
                center
            />
        </>
    )
}

FormHeader.propTypes = {
    title: PropTypes.string.isRequired,
}
