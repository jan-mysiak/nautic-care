import React from 'react'
import PropTypes from 'prop-types'
import { FlexContainer, Typography } from '../_shared';
import styled from 'styled-components';

export default function ListItem(props) {
    return (
        <StyledListItem key={props.id}>
            <FlexContainer width="100%" justifyContent="space-between" alignItems="center">
                <div>
                    <Typography
                        text={props.time}
                        color="accent"
                    />
                    <Typography
                        text={props.model}
                        color="light"
                    />
                </div>
                <div>
                    <Typography
                        text={props.type}
                        color="light"
                    />
                </div>
            </FlexContainer>
        </StyledListItem>
    )
}

const StyledListItem = styled.div`
    border-bottom: solid 1px rgba(256,256,256,.3);
    height: 6rem;
    width: 100%;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    align-items: center;
`

ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
