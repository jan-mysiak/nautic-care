import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export default function FlexContainer(props) {
    return (
        <StyledFlexContainer {...props}>
            {props.children}
        </StyledFlexContainer>
    )
}

const StyledFlexContainer = styled.div`
    display: flex;
    border-radius: 3px;

    ${props => css`
        flex-direction: ${props.vertical && "column"};
        width: ${props.width};
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};
        background: ${props.background};
        border: ${props.border};
        outline: solid 1px transparent;
        height: ${props.row ? "var(--row-height)" : props.height};
    `}
`

FlexContainer.propTypes = {
    children: PropTypes.node.isRequired,
    vertical: PropTypes.bool,
    row: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    background: PropTypes.string,
    border: PropTypes.string,
    animate: PropTypes.bool,
}

FlexContainer.defaultProps = {
    vertical: false,
    width: "",
    height: "",
    justifyContent: "",
    alignItems: "",
    border: "",
    animate: false,
    row: false,
}


