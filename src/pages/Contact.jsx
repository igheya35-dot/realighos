import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
    };

    return (
        <div className="page-content">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch to discuss your next project.</p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>We are available for consultations and project assessments.</p>

                        <div className="contact-item">
                            <MapPin className="text-primary" />
                            <div>
                                <h4>Visit Us</h4>
                                <p>123 Real Estate Ave, Lagos, Nigeria</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Phone className="text-primary" />
                            <div>
                                <h4>Call Us</h4>
                                <p>+234 800 123 4567</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Mail className="text-primary" />
                            <div>
                                <h4>Email Us</h4>
                                <p>info@realighos.com</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell us about your project" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
