import React from 'react';
import { Container } from 'react-bootstrap';

import Background from './Background';

const Content = props => {
    //  PropList {
    //      className: forwards className
    //      variant: bootstrap color theme to use as background
    //  }

    return (
        <Background className={props.variant ? `bg-${props.variant}` : ''}>
            <Container className={"content-container align-items-center p-3 " + props.className}>
                {props.children}
            </Container>
        </Background>
    );
};

export default Content;