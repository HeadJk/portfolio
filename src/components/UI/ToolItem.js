import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import { IconContext } from 'react-icons';
import { Colors } from '../../constants/colorTheme';
import './css/toolItem.css';
import DualCol from '../layout/DualCol';

const ToolItem = props => {
    //  Prop list {
    //      flipped: flips the tool description and tool list sides
    //      Icon: icon component for the DualCol
    //      label: label for tool items
    //  }

    // Component for left side of DualCol
    const LeftComponent = () => (
        <Row className="w-100">
            <IconContext.Provider value={{ color: Colors.white, size: 300 }}>
                <props.Icon />
            </IconContext.Provider>
            <h2 className="text-center mh-100 text-white">
                {props.label}
            </h2>
        </Row>
    )

    // Component for right side of DualCol
    const RightComponent = () => (
        <div>Right</div>
    )

    return (
        <DualCol 
            reverseVerticalOrder={props.flipped ? true : false}
            leftClassName={props.flipped ? "bg-white" : "bg-primary bg-gradient"}
            rightClassName={props.flipped ? "bg-primary bg-gradient" : "bg-white"}
            height={500}
            left={
                props.flipped ? <RightComponent /> : <LeftComponent />
            }
            right={
                props.flipped ? <LeftComponent /> : <RightComponent />
            }
        />
    );
};

export default ToolItem;