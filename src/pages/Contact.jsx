import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.sendForm(
                'service_ebwdpml',
                'template_3hbr98q',
                formRef.current,
                'HQmAIiEPWAQxZ9F3R'
            );

            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.'
            });
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or contact us directly via phone.'
            });
        } finally {
            setIsLoading(false);
        }
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
                                <p>Pavillion Court, Happy home estate, Sangotedo, Lagos</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Phone className="text-primary" />
                            <div>
                                <h4>Call Us</h4>
                                <p>+2348037965323</p>
                                <p>+2348087965865</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Mail className="text-primary" />
                            <div>
                                <h4>Email Us</h4>
                                <p>Realighos38@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                        {status.message && (
                            <div className={`form-status ${status.type}`}>
                                {status.type === 'success' ? (
                                    <CheckCircle size={20} />
                                ) : (
                                    <AlertCircle size={20} />
                                )}
                                <span>{status.message}</span>
                            </div>
                        )}

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="from_name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="from_email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="Tell us about your project" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    Sending... <Loader2 size={18} className="spin" style={{ marginLeft: '0.5rem' }} />
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
