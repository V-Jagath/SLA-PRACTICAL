import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    pros: string[];
    cons: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, pros, cons }) => {
    return (
        <div className="feature-card">
            <h3>{title}</h3>
            <p className="description">{description}</p>

            <div className="pros-cons">
                <div className="pros">
                    <h4>✅ Advantages</h4>
                    <ul>
                        {pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                        ))}
                    </ul>
                </div>

                <div className="cons">
                    <h4>❌ Disadvantages</h4>
                    <ul>
                        {cons.map((con, index) => (
                            <li key={index}>{con}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;