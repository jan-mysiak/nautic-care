import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export default function Spacer(props) {
    return (
        <StyledSpacer {...props}>
            {props.children}
        </StyledSpacer>
    )
}

const StyledSpacer = styled.div`
    // all: inherit;

    ${props => css`
        margin: ${props.margin.join("rem ").concat("rem")};
        padding: ${props.padding.join("rem ").concat("rem")};
    `}
`

Spacer.propTypes = {
    children: PropTypes.node,
    margin: PropTypes.arrayOf(Number),
    padding: PropTypes.arrayOf(Number),
}

Spacer.defaultProps = {
    margin: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
}
