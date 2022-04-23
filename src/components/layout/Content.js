import React from 'react';
import { Container } from 'react-bootstrap';
import PropType from 'prop-types';

import Background from './Background';
import Header from './Header';

const Content = props => {
    //  PropList {
    //      className: forwards className
    //      variant: bootstrap color theme to use as background
    //  }

    return (
        <Background variant={props.variant}>
            <Container className={"content-container align-items-center py-5 " + props.className}>
                {props.header && <Header title={props.header} />}
                {props.children}
            </Container>
        </Background>
    );
};

Content.propTypes = {
    className: PropType.string,
    variant: PropType.string,
    header: PropType.string
}

export default Content;