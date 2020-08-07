import React from 'react'

export default function Button(props) {
    return (
        <button className={props.className}>
            { props.title || props.children() }
        </button>
    )
}
