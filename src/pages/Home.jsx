import { ArrowRight, Home as HomeIcon, Hammer, Building, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import gift5bed from '../assets/images/gift_5bed.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content container">
                    <h1 className="fade-in">Real Ighos <span className="text-highlight">Resources Limited</span></h1>
                    <p className="fade-in delay-1">Your trusted partner in premier construction and real estate development</p>
                    <div className="hero-actions fade-in delay-2">
                        <Link to="/projects" className="btn btn-primary">
                            View Our Work <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Services Section */}
            <section className="section services">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Expertise</h2>
                        <div className="header-line"></div>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="icon-box">
                                <HomeIcon size={32} />
                            </div>
                            <h3>Real Estate Development</h3>
                            <p>Developing modern residential and commercial properties with state-of-the-art amenities.</p>
                        </div>

                        <div className="service-card">
                            <div className="icon-box">
                                <Building size={32} />
                            </div>
                            <h3>Civil Construction</h3>
                            <p>Expert construction services delivering structural integrity and architectural excellence.</p>
                        </div>

                        <div className="service-card">
                            <div className="icon-box">
                                <Hammer size={32} />
                            </div>
                            <h3>Renovation & Remodeling</h3>
                            <p>Transforming existing spaces into modern, functional, and aesthetic environments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section featured-projects">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Projects</h2>
                        <div className="header-line"></div>
                    </div>

                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <img src={gift5bed} alt="Mr. Gift 5-Bed Cybervile" />
                                <div className="project-overlay">
                                    <h4>Mr. Gift 5-Bed Cybervile</h4>
                                    <Link to="/projects">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src={project2} alt="Chief Odus Iconia" />
                                <div className="project-overlay">
                                    <h4>Chief Odus Iconia</h4>
                                    <Link to="/projects">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src={project3} alt="H4 16 Project" />
                                <div className="project-overlay">
                                    <h4>H4 16 Project</h4>
                                    <Link to="/projects">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="center-btn">
                        <Link to="/projects" className="btn btn-outline">View All Projects</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials/Stats */}
            <section className="section stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Start Your Project?</h2>
                    <p>Let's build something amazing together.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
