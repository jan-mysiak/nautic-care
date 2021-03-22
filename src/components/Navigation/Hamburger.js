import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export default function Hamburger(props) {
    return (
        <StyledHamburger
            className={props.menuOpen ? "active" : ""}
            onClick={props.toggleMenu}
        >
            <FaBars />
        </StyledHamburger>
    )
}

const StyledHamburger = styled.div`
    background: var(--color-accent);
    color: var(--color-light);
    font-size: 2rem;
    cursor: pointer;
    transition: all .3s ease-out;
    border-radius: .8rem;
    padding: .5rem .6rem;
    line-height: 0;
    border: solid 1px rgba(0,0,0,.3);
    position: relative;

    & > * {
        transition: all .3s ease-out;
        transform: translateZ(0) perspective(1px);
    }

    &.active {
        background: var(--color-light);
        color: var(--color-accent);
    }

    @media (min-width: 966px) {
        &:hover {
            // background: var(--color-light);
            // color: var(--color-accent);

            & > * {
            transform: scale(1.15);
            }
        }
    }

`

Hamburger.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired,
}
