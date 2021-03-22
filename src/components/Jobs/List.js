import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function List(props) {
    return (
        <StyledList>
            {props.children}
        </StyledList>
    )
}

const StyledList = styled.div`
    // display: flex;
    height: 90%;
    width: 100%;
    background: rgba(0,0,0,.6);
    color: var(--color-light);
    font-size: 1.2rem;
    border-radius: 6px;
    border: solid 1px var(--color-light);
`

List.propTypes = {
    children: PropTypes.node.isRequired,
}
