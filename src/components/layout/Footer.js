import React from 'react';

const Footer = props => {
    return (
        <footer className="bg-secondary footer">
            {/* Resources:
                <a href='https://www.freepik.com/vectors/technology'>Technology vector created by stories - www.freepik.com</a>
                <div>Icons made by <a href="https://www.flaticon.com/authors/kmg-design" title="kmg design">kmg design</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            */}
            {props.children}
        </footer>
    );
};

export default Footer;