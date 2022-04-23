import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';

const DualCol = props => {
    //  Prop list {
    //      left: component to render on the left
    //      right: component to render on the right
    //      reverseVerticalOrder: does what name suggests
    //      height: height of each column
    //      leftClassName: forwards className to left component
    //      rightClassName: forwards className to right component
    //  }

    const height = props.height ?? 500;
    const colClass = "d-flex justify-content-center align-items-center ";

    return (
        <Row className="w-100">
            <Col 
                xs={{span: 12, order: props.reverseVerticalOrder ? 'last' : 'first'}} 
                lg={{span: 6, order: 'first'}} 
                className={colClass + props.leftClassName}
                style={{height}}
            >
                {props.left}
            </Col>
            <Col 
                xs={12} 
                lg={6} 
                className={colClass + props.rightClassName}
                style={{height}}
            >
                {props.right}
            </Col>
        </Row>
    );
};

DualCol.propTypes = {
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired,
    reverseVerticalOrder: PropTypes.bool,
    height: PropTypes.number,
    leftClassName: PropTypes.string,
    rightClassName: PropTypes.string
}

export default DualCol;