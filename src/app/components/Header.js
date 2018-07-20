import React from 'react';

export default function Header(props) {
    console.log("Header render ", props)

    //error, props are immutable
    //props.appTitle = 'Test';

    return (
        <div>
            <h2> {props.appTitle} </h2>
            {/*  todo: navigation buttons  */}
            <hr />
        </div>
    )
}