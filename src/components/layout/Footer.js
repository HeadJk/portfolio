import React from 'react';

const Footer = props => {
    return (
        <footer className="bg-secondary footer">
            {props.children}
        </footer>
    );
};

export default Footer;