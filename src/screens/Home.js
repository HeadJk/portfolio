import React, { useState } from 'react';
import { Col, Row, Image, Button, Modal } from 'react-bootstrap';
import { saveAs } from "file-saver";

import './css/Home.css'
import Content from '../components/layout/Content';

const Home = props => {
    const [isdownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    const downloadResume = () => {
        saveAs(
            "Resume.pdf",
            "Resume-Jacob-Head"
        )
    }

    // Used to both open and close the modal
    const handleDownloadModal = (isOpening) => {
        setIsDownloadModalOpen(isOpening);
    }

    return (
        <Content variant="light" className="justify-content-center">
            <Row className="bg-white p-5 justify-content-center shadow-sm">
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
                            to hone my skills within these fields through my computer engineering degree, online courses and
                            software developer internship positions.</p>
                        <Row className="justify-content-center">
                            <Col xs={8} md={6} lg={12} className="d-grid d-lg-flex">
                                <Button 
                                    onClick={() => handleDownloadModal(true)} 
                                    variant="primary">View Resume
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={8} md={6} lg={4} className="mb-3 mb-lg-0">
                    <Image src="profilePic.jpg" roundedCircle fluid />
                </Col>
            </Row>
            <Modal show={isdownloadModalOpen} onHide={() => handleDownloadModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>Download Resume-Jacob-Head.pdf?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleDownloadModal(false)}>
                        Cancel
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={() => {
                            downloadResume();
                            handleDownloadModal(false);
                        }}
                    >
                        Download&nbsp;&nbsp;<i class="bi bi-download"></i>
                    </Button>
                </Modal.Footer>
            </Modal>
        </Content>
    );
};

export default Home;