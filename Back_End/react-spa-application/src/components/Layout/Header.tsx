import React from 'react';

type Page = 'home' | 'about' | 'contact';

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="logo">React Learning Hub</h1>
                <ul className="nav-links">
                    <li>
                        <button
                            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                            onClick={() => onNavigate('home')}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                            onClick={() => onNavigate('about')}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                            onClick={() => onNavigate('contact')}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;