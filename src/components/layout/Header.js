import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { Col, Row, Container } from 'react-bootstrap';

import './css/header.css';

const Header = props => {
    const [isLoading, setIsLoading] = useState(true);
    
    const title = props.title ?? "Header";

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const labelProps = useSpring({
        opacity: isLoading ? 0 : 1
    });

    const breakProps = useSpring({
        width: isLoading ? '0%' : '100%'
    });

    return (
        <Container fluid className="header px-0 mb-5 d-flex align-items-center">
            <Container fluid>
                <Row>
                    <Col className="p-0">
                        <animated.div style={labelProps} className="h1">
                            {title}
                        </animated.div>
                    </Col>
                </Row>
                <Row>
                    <Col className="p-0">
                        <animated.div className="border-top border-5 border-secondary" style={breakProps}>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

Header.propTypes = {
    title: PropType.string,
}

export default Header;