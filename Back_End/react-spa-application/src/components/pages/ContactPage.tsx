import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: 'general'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '', subject: 'general' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="page">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions about React? Want to contribute? We'd love to hear from you!</p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <h3>📧 Email</h3>
                            <p>learn@reacthub.dev</p>
                        </div>
                        <div className="contact-item">
                            <h3>💬 Community</h3>
                            <p>Join our Discord server</p>
                        </div>
                        <div className="contact-item">
                            <h3>🐙 GitHub</h3>
                            <p>github.com/react-learning-hub</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        >
                            <option value="general">General Inquiry</option>
                            <option value="technical">Technical Question</option>
                            <option value="contribution">Contribution</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Your message here..."
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;