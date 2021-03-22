import React from 'react'
import PropTypes from 'prop-types'

export default function Icon(props) {
    return (
        <>
            {React.createElement(props.icon, {
                style: {
                    padding: "0.5rem",
                    borderRadius: "3px",
                    color: `var(--color-${props.color})`,
                    background: `var(--color-${props.background})`,
                    height: props.height,
                    width: props.width,
                    border: props.bordered && "solid 1px rgba(0,0,0,.3)"
                }
            })}
        </>
    )
}

Icon.propTypes = {
    icon: PropTypes.func.isRequired,
    color: PropTypes.oneOf(["light", "dark", "accent"]),
    background: PropTypes.oneOf(["", "light", "dark", "accent"]),
    height: PropTypes.string,
    width: PropTypes.string,
    bordered: PropTypes.bool,
}

Icon.defaultProps = {
    color: "light",
    background: "",
    height: "100%",
    width: "",
    bordered: false,
}
