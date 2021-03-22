import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

export default function FadeGrowIn(props) {
    return (
        <StyledFadeGrowIn>
            {props.children}
        </StyledFadeGrowIn>
    )
}

const fadeGrowIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(.7);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

const StyledFadeGrowIn = styled.div`
    & > * {
        animation: 0.4s ${fadeGrowIn} ease;
        transform: perspective(1px) translateZ(0);
    }
`

FadeGrowIn.propTypes = {
    children: PropTypes.node.isRequired,
}
