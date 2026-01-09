import { Users, Target, Award, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="page-content">
            <div className="page-header">
                <div className="container">
                    <h1>About Real Ighos Resources Limited</h1>
                    <p>Reg: 8742914 - Building Trust, Quality, and Excellence.</p>
                </div>
            </div>

            <div className="container section">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Real Ighos Resources Limited began as Real Ighos Concept and was incorporated under the Corporate Affairs Commission on April 12th, 2016. Over the years, the group has undertaken challenging projects and acquired skills, technical know-how, and experience in design and build solutions, procurement, and project management.
                        </p>
                        <p>
                            We are a reputable construction management company specializing in residential building construction, interior finishes, renovations, and general construction services. With a commitment to delivering high-quality projects that exceed client expectations, our team of experienced professionals ensures timely, cost-effective, and sustainable project delivery.
                        </p>
                        <p>
                            **Objective:** We are known for "DETAILING". Our objective is to provide our clients with an "I am assured" experience, prioritizing their objectives through clear communication and follow-through.
                        </p>

                        <div className="vision-mission-grid">
                            <div className="vm-card">
                                <h3>Our Vision</h3>
                                <p>To be a reputable contractor delivering beyond our client expectation and always.</p>
                            </div>
                            <div className="vm-card">
                                <h3>Our Mission</h3>
                                <p>To procure projects at competitive pricing, provide sustainable and safe working environments, and deliver quality, well-detailed jobs within a reasonable time frame.</p>
                            </div>
                        </div>

                        <h2 style={{ marginTop: '2rem' }}>Meet Our Team</h2>
                        <p>We have a team of well-experienced and skilled professionals saddled with project responsibility to deliver highly detailed jobs.</p>
                        <ul className="team-list">
                            <li><strong>Okeke Innocent</strong> - Director</li>
                            <li><strong>Edafe Victor</strong> - General Manager</li>
                            <li><strong>Goodluck Igheya Omoyovwosho</strong> - Managing Partner</li>
                            <li><strong>Esiesimual Jude</strong> - Head Civil</li>
                            <li><strong>Jennifer Asiosa Omoyovwosho</strong> - Business Development Executive/Partner</li>
                            <li><strong>Alex Agheiye Asekhamhe</strong> - Quantity Surveyor</li>
                            <li><strong>Abiodun Moses Awoyera</strong> - Architect</li>
                            <li><strong>Alex Igbape</strong> - Structural Engineer</li>
                        </ul>
                    </div>

                    <div className="about-stats-grid">
                        <div className="stat-card">
                            <Users size={32} className="text-primary" />
                            <h3>Client Focus</h3>
                            <p>We prioritize our clients' visions and satisfaction above all.</p>
                        </div>
                        <div className="stat-card">
                            <Target size={32} className="text-primary" />
                            <h3>Precision</h3>
                            <p>Known for "DETAILING" in every project delivery.</p>
                        </div>
                        <div className="stat-card">
                            <Award size={32} className="text-primary" />
                            <h3>Quality</h3>
                            <p>Uncompromising standards in materials and workmanship.</p>
                        </div>
                        <div className="stat-card">
                            <CheckCircle size={32} className="text-primary" />
                            <h3>Reliability</h3>
                            <p>Your reliable partner for all construction needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
