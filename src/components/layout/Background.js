import React from 'react';
import { Container } from 'react-bootstrap';

const Background = props => {
    //  PropList {
    //      className: forwards className
    //  }

    return (
        <Container fluid className={"content-container px-0 " + props.className} style={{backgroundColor: props.color}}>
            {props.children}
        </Container>
    );
};

export default Background;