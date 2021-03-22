import React from 'react'
import PropTypes from 'prop-types';

import { Typography } from '../_shared'
import styled from 'styled-components';

export default function Brand(props) {
    return (
        <StyledBrand className={props.menuOpen ? "hidden" : ""}>
            <Typography
                text="NAUTIC CARE"
                color="light"
                size="2.5"
                weight="100"
                spacing="-1"
            />
        </StyledBrand>
    )
}

const StyledBrand = styled.div`
    transition: all .3s ease-out .6s;
    // transform: scale(1) perspective(1px);
    transform: translateY(0rem);

    &.hidden {
        transition: all .3s linear;
        opacity: 0;
        transform: translateY(6rem);
        // transform: scale(.5) perspective(1px);
    }
`

Brand.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
}


