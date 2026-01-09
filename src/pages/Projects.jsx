import { useState } from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.jpg'; // Golf Estate
import project2 from '../assets/images/project2.jpg'; // Chief Odus
import project3 from '../assets/images/project3.jpg'; // H4 16
import iconia2bed from '../assets/images/iconia_2bed.jpg';
import iconiaMessonaite from '../assets/images/iconia_messonaite.jpg';
import charlesCyber from '../assets/images/charles_cyber_vile.jpg';
import gift5bed from '../assets/images/gift_5bed.jpg';
import victor2bed from '../assets/images/victor_2bed.jpg';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        { id: 1, title: 'Golf Estate', category: 'residential', image: project1, description: 'Luxury golf course estate development.' },
        { id: 2, title: 'Chief Odus Iconia', category: 'residential', image: project2, description: 'Premium residential complex with modern amenities.' },
        { id: 3, title: 'H4 16 Project', category: 'construction', image: project3, description: 'High-rise structural reinforcement project.' },
        { id: 4, title: 'Iconia 2 Bedroom', category: 'residential', image: iconia2bed, description: 'Contemporary 2-bedroom apartments.' },
        { id: 5, title: 'Iconia Messonaite', category: 'residential', image: iconiaMessonaite, description: 'Stylish messonaite living spaces.' },
        { id: 6, title: 'Mr. Charles Cyber Vile', category: 'commercial', image: charlesCyber, description: 'Modern commercial and residential mix.' },
        { id: 7, title: 'Mr. Gift 5-Bed Cybervile', category: 'residential', image: gift5bed, description: 'Spacious 5-bedroom luxury residence.' },
        { id: 8, title: 'Mr. Victor 2-Bed Cyber Vile', category: 'residential', image: victor2bed, description: 'Compact and elegant 2-bedroom units.' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="page-content">
            <div className="page-header">
                <div className="container">
                    <h1>Our Projects</h1>
                    <p>Explore our portfolio of successful constructions and developments.</p>
                </div>
            </div>

            <div className="container section">
                <div className="filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filter === 'residential' ? 'active' : ''}`}
                        onClick={() => setFilter('residential')}
                    >
                        Residential
                    </button>
                    <button
                        className={`filter-btn ${filter === 'construction' ? 'active' : ''}`}
                        onClick={() => setFilter('construction')}
                    >
                        Construction
                    </button>
                    <button
                        className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
                        onClick={() => setFilter('commercial')}
                    >
                        Commercial
                    </button>
                </div>

                <div className="projects-grid-page">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-item fade-in">
                            <div className="project-thumb">
                                <img src={project.image} alt={project.title} loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <span className="badge">{project.category}</span>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Projects;
