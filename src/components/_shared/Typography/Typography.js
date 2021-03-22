import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export default function Typography(props) {
    return (
        <StyledTypography {...props}>
            {props.text}
        </StyledTypography>
    )
}

const StyledTypography = styled.div`
    ${props => css`
        color: var(--color-${props.color});
        font-size: ${props.size}rem;
        font-weight: ${props.weight};
        letter-spacing: ${props.spacing}px;
        text-align: ${props.center && "center"};
        line-height: ${props.lineHeight};
        font-style: ${props.italic && "italic"};
        font-family: ${`var(--font-${props.secondary ? "secondary" : "primary"})`}
    `}
`

Typography.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["light", "dark", "accent"]),
    size: PropTypes.string,
    weight: PropTypes.string,
    spacing: PropTypes.string,
    center: PropTypes.bool,
    lineHeight: PropTypes.string,
    italic: PropTypes.bool,
    secondary: PropTypes.bool,
}

Typography.defaultProps = {
    size: "1",
    weight: "400",
    spacing: "1",
    color: "dark",
    center: false,
    lineHeight: "1.5",
    italic: false,
    secondary: false,
}
