import React from 'react';

const Footer = props => {
    return (
        <footer className="bg-secondary footer">
            {/* Resources:
                <a href='https://www.freepik.com/vectors/technology'>Technology vector created by stories - www.freepik.com</a>
            */}
            {props.children}
        </footer>
    );
};

export default Footer;