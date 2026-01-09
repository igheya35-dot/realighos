import { Link } from 'react-router-dom';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <Link to="/" className="footer-logo">
                        <img src={logo} alt="Real Ighos" className="logo-img" />
                        <span className="logo-text">eal Ighos</span>
                    </Link>
                    <p>Building dreams into reality. Your trusted partner in construction and real estate.</p>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p><MapPin size={16} /> 123 Real Estate Ave, Lagos</p>
                    <p><Mail size={16} /> info@realighos.com</p>
                    <p><Phone size={16} /> +234 801 234 5678</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
