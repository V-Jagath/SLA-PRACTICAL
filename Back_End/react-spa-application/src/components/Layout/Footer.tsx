import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} React Learning Hub. All rights reserved.</p>
            <p>Made with ❤️ for React developers</p>
        </footer>
    );
};

export default Footer;