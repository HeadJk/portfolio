import React from 'react';
import { Col, Row, Image, Button } from 'react-bootstrap';

import './css/Home.css'
import Background from '../components/layout/Background';
import Content from '../components/layout/Content';

const Home = props => {
    return (
        <Background className="bg-light">
            <Content className="justify-content-center">
                <Row>
                    <Col xs={{span: 12, order: 'last'}} lg={{span: 7, order: 'first'}} xl={8}>
                        <div className="h-100 d-flex flex-column justify-content-center">
                            <h1 className="text-center text-lg-start" >Jacob Head</h1>
                            <h2 className="text-primary text-center text-lg-start">
                                Computer Engineer 
                                <span className="d-none d-sm-inline"> - </span>
                                <span className="d-inline d-sm-none"><br /></span>
                                Full Stack Developer
                            </h2>
                            <p className="text-center text-lg-start">Term 5 computer engineering student at Memorial University of 
                                Newfoundland with expected graduation in 2024. My two goals in every situation are to find self-improvement 
                                and inspire others. I have a strong passion for web and app development and have been given the great opportunity 
                                to practice those fields within my computer engineering degree and throughout various online courses.</p>
                            <Row className="justify-content-center">
                                <Col xs={12} sm={6} lg={12} className="d-grid d-lg-flex">
                                    <Button variant="primary">Resume&nbsp;&nbsp;<i class="bi bi-download"></i></Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center justify-content-lg-end mb-3 mb-0-sm">
                        <Image className="profile-image" src="profilePic.jpg" roundedCircle />
                    </Col>
                </Row>
            </Content>
        </Background>
    );
};

export default Home;