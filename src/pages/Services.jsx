import { Home, Building, Hammer, Layout, PaintBucket, Wrench, Briefcase, ShoppingBag } from 'lucide-react';

const Services = () => {
    const services = [
        { icon: <Layout size={40} />, title: 'Architectural & Structural Design', desc: 'Preparing detailed architectural and structural designs for proposed projects with working drawings.' },
        { icon: <Briefcase size={40} />, title: 'Project Management', desc: 'Detailed scheduling, resource planning, and project supervision from start to finish.' },
        { icon: <Hammer size={40} />, title: 'Building Construction', desc: 'Main contractor services for small to medium-sized residential and commercial projects.' },
        { icon: <Wrench size={40} />, title: 'Renovation & Maintenance', desc: 'Building renovation, remodeling (kitchen & bathroom), and facility management.' },
        { icon: <PaintBucket size={40} />, title: 'Interior Finishes', desc: 'Top-notch interior finishing and decoration services.' },
        { icon: <ShoppingBag size={40} />, title: 'Procurement Services', desc: 'Engaging in procurement from project start to completion.' },
        { icon: <Home size={40} />, title: 'Real Estate Consultant', desc: 'Expert advice on real estate properties.' },
        { icon: <Building size={40} />, title: 'Sales of Properties', desc: 'Sales of lands, residential, and commercial buildings.' },
    ];

    return (
        <div className="page-content">
            <div className="page-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive solutions: From conception to completion, we detail every step.</p>
                </div>
            </div>

            <div className="container section">
                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', display: 'grid', gap: '2rem' }}>
                    {services.map((s, i) => (
                        <div key={i} className="service-card">
                            <div className="icon-box">
                                {s.icon}
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
