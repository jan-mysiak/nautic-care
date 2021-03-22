import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function TextInput(props) {
    return (
        <StyledTextInput {...props} />
    )
}

const StyledTextInput = styled.input`
    border: solid 1px rgba(0,0,0,.3);
    border-radius: 3px;
    font-family: var(--font-primary);
    font-size: 1rem;
    height: 100%;
    padding-left: 0.8rem;
    outline: none;
    transition: border .3s linear, padding .2s ease-out;
    display: block;
    width: 100%;
    background: var(--color-dark);
    color: var(--color-light);
    letter-spacing: 1.5px;

    &:focus {
        border: solid 1px var(--color-accent);
        padding-left: 0.5rem;
    }
    &::placeholder {
        color: var(--color-light);
        font-weight: 700;
    }
`

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
}

