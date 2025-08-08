import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>
                Copyright ©{currentYear} All rights reserved | This template is made with <span>❤</span> by Kuralarasan
            </p>
        </footer>
    );
};

export default Footer;