import React from 'react';
import { Container } from 'react-bootstrap';

const Content = props => {
    return (
        <Container className={"content-container align-items-center p-3 " + props.className}>
            {props.children}
        </Container>
    );
};

export default Content;