import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="page">
            <h1>About React Learning Hub</h1>
            <div className="about-content">
                <section className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        To provide a comprehensive, easy-to-understand learning resource for React developers
                        of all skill levels. From beginners to advanced users, we aim to make React concepts
                        accessible and practical.
                    </p>
                </section>

                <section className="features">
                    <h2>What We Offer</h2>
                    <ul>
                        <li>📚 Comprehensive React documentation</li>
                        <li>🎯 Real-world examples and use cases</li>
                        <li>⚡ Performance optimization tips</li>
                        <li>🔧 Best practices and patterns</li>
                        <li>🛠️ Interactive code examples</li>
                    </ul>
                </section>

                <section className="team">
                    <h2>Meet Our Team</h2>
                    <p>
                        We're a group of passionate React developers who believe in sharing knowledge
                        and helping the community grow. Our team includes senior frontend engineers,
                        React trainers, and open-source contributors.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;