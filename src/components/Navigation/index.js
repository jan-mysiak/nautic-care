import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer, Spacer } from '../_shared';
import Brand from './Brand';
import styled from 'styled-components';
import MenuButtons from './MenuButtons';
import Hamburger from './Hamburger';

export default function Navigation(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <StyledNavigation className={props.authUser ? "" : "hidden"}>
            <FlexContainer height="100%" alignItems="center">
                <Hamburger toggleMenu={toggleMenu} menuOpen={menuOpen} />

                <Spacer margin={[0, 0.5]} />

                <Brand menuOpen={menuOpen} />
            </FlexContainer>

            <MenuButtons toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </StyledNavigation>
    )
}

const StyledNavigation = styled.div`
    overflow: hidden;
    position: sticky;
    height: var(--topnav-height);
    opacity: 1;
    transition: all .3s linear;
    z-index: 999;

    &.hidden {
        opacity: 0;
        height: 0rem;
    }
}`

Navigation.propTypes = {
    authUser: PropTypes.bool.isRequired,
}
