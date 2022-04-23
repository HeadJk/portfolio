import React from 'react';

const Background = props => {
    //  PropList {
    //      className: forwards className
    //  }

    return (
        <div className={"content-container " + (props.variant ? `bg-${props.variant} ` : '')}>
            {props.children}
        </div>
    );
};

export default Background;