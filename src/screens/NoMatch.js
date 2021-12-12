import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import Content from '../components/layout/Content'

const NoMatch = props => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const toHomeRouteHandler = () => {
        navigate('/');
    }

    return (
        <Content className="justify-content-center">
            <Row className="justify-content-center" >
                <Col sm={12} md={6} lg={5} xl={4}>
                    <div className="h-100 d-flex flex-column justify-content-center text-center text-md-start">
                        <h1>Page Not Found</h1>
                        <p>The requested URL <b>{location.pathname}</b> was not found on this server.</p>
                        <div className="d-grid d-md-flex align-items-end">
                            <Button onClick={toHomeRouteHandler} variant="primary">Back to Home</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={5}>
                    <Image src="error404.jpg" fluid/>
                </Col>
            </Row>
        </Content>
    );
};

export default NoMatch;