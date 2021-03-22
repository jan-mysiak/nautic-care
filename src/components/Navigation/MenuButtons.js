import React from 'react'
import PropTypes from 'prop-types'
import { Button, Spacer } from '../_shared'
import LogoutButton from './LogoutButton'
import styled from 'styled-components';

export default function MenuButtons(props) {
    return (
        <StyledMenuButtons
            onClick={props.toggleMenu}
            className={props.menuOpen ? "active" : ""}
        >
            <LogoutButton />
            <Spacer margin={[0.5]} />
            <Button text="Dagsavslut" primary />
        </StyledMenuButtons>
    )
}

const StyledMenuButtons = styled.div`
    position: fixed;
    left: 7rem;
    top:-6rem;
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content:center;
    transition: top .3s ease-out .3s, transform .3s ease-out;
    transform: scale(.8) perspective(1px);
    pointer-events:none;
    height: var(--topnav-height);

    &.active {
        transition: top .3s ease-out, transform .3s ease-out .3s;
        top: 1rem;
        transform: scale(1);
        pointer-events: all;
    }
`

MenuButtons.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired,
}

