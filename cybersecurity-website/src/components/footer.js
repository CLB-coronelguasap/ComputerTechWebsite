import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Cybersecurity Awareness. All rights reserved.</p>
            <nav>
                <a href="/about.html" style={{ margin: '0 15px' }}>About Us</a>
                <a href="/security.html" style={{ margin: '0 15px' }}>Security</a>
                <a href="/lookup.html" style={{ margin: '0 15px' }}>Lookup</a>
            </nav>
        </footer>
    );
};

export default Footer;