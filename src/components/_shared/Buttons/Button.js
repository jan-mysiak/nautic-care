import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

export default function Button(props) {
    const { onClick, text, primary, disabled } = props;

    return (
        <StyledButton onClick={onClick} primary={primary} disabled={disabled}>
            {text}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    background: ${props => props.primary ? "var(--color-accent)" : "var(--color-dark)"};
    color: var(--color-light);
    border: solid 1px rgba(256,256,256,.3);
    text-transform: uppercase;
    transition: all .3s linear;
    font-family: var(--font-primary);
    font-weight: 700;
    cursor: pointer;
    padding: 0 1rem;
    border-radius: 3px;
    letter-spacing: 1px;
    font-size: 1rem;
    text-overflow: clip;
    height: var(--row-height);
    transform: perspective(1px);

    &:hover:not(:disabled), &:focus {
        opacity: .8;
        border: solid 1px var(--color-light);
        // border: solid 1px black;
    }
    &:disabled {
        opacity: .5;
    }
`

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
}
