import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ/FAQ';
import '../styles/Services.css';

function ProjectCard({ status, statusColor, tags, title, description }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(230, 0, 0, 0.15), rgba(255, 255, 255, 0.03))`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.background = '';
    }
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-content">
        <div className="project-status">
          <span
            className="status-dot"
            style={{
              background: statusColor,
              boxShadow: `0 0 8px ${statusColor}, 0 0 16px ${statusColor}`
            }}
          ></span>
          <span className="status-text">{status}</span>
        </div>
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const servicesList = [
    {
      icon: 'fa-users',
      title: 'Implant & Internships',
      description: 'Implanting Albedrix with a team of exceptional developers and interns with a passion for AI, Embedded Systems, IoT, and everything in between.',
      tags: ['Internships', 'Embedded Systems', 'AI', 'IoT', 'Full Stack']
    },
    {
      icon: 'fa-microchip',
      title: 'Embedded Systems',
      description: 'Intelligent firmware and embedded architecture for advanced electronic products.',
      tags: ['STM32', 'ESP32', 'Arduino', 'Raspberry Pi', 'PCB Design', 'RTOS']
    },
    {
      icon: 'fa-robot',
      title: 'Edge AI',
      description: 'Real-time AI deployment on embedded and edge hardware infrastructure.',
      tags: ['YOLO', 'TensorFlow', 'OpenCV', 'ONNX', 'PyTorch']
    },
    {
      icon: 'fa-wifi',
      title: 'IoT Platforms',
      description: 'Smart, secure, connected ecosystems for industrial and consumer applications.',
      tags: ['MQTT', 'Cloud', 'ESP32', 'AWS', 'Firebase']
    },
    {
      icon: 'fa-code',
      title: 'Full Stack Engineering',
      description: 'Modern, scalable web and software systems for intelligent platforms.',
      tags: ['React', 'Node.js', 'Next.js', 'MongoDB', 'Docker']
    },
    {
      icon: 'fa-lightbulb',
      title: 'Product & MVP Consulting',
      description: 'Technical consulting, prototyping, and MVP development for early-stage teams.',
      tags: ['Prototyping', 'Technical Consulting', 'Academic Projects']
    }
  ];

  const processSteps = [
    {
      index: '01',
      title: 'Requirement',
      description: 'Define scope, constraints, and success criteria with the client.'
    },
    {
      index: '02',
      title: 'Research',
      description: 'Evaluate components, feasibility, and technical approach.'
    },
    {
      index: '03',
      title: 'Architecture',
      description: 'Design the system: hardware, firmware, and software layers.'
    },
    {
      index: '04',
      title: 'Development',
      description: 'Build in tight iterations with continuous validation.'
    },
    {
      index: '05',
      title: 'Testing',
      description: 'Stress-test across real-world conditions and edge cases.'
    },
    {
      index: '06',
      title: 'Delivery',
      description: 'Ship with documentation, support, and a clean handover.'
    }
  ];

  const productsList = [
    {
      status: 'Active Research & Study',
      statusColor: '#22c55e',
      tags: ['Healthcare Technology', 'ECG Analysis', 'Embedded Intelligence'],
      title: 'ECG Emotion Analysis System',
      description: 'AI-powered ECG analytics system for emotion detection and biomedical signal interpretation.'
    },
    {
      status: 'Design Phase',
      statusColor: '#f59e0b',
      tags: ['Embedded', 'Power Systems', 'Portable Tech'],
      title: 'Portable Laptop Powerbank',
      description: 'Portable high-capacity power solution designed for laptops and mobile engineering workflows.'
    }
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <span className="section-subtitle">OUR CAPABILITIES</span>
          <h1>OUR SERVICES</h1>
          <p>
            From low-level microcontrollers to edge machine learning and secure web platforms, 
            we engineer complete intelligent ecosystems.
          </p>
        </div>
      </div>

      {/* CORE SERVICES GRID */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="services-grid">
            {servicesList.map((service, idx) => (
              <div key={idx} className="service-panel">
                <div className="service-panel-header">
                  <div className="service-icon"><i className={`fas ${service.icon}`}></i></div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, tagIdx) => (
                    <span key={tagIdx}>{tag}</span>
                  ))}
                </div>
                <Link to="/contact" className="service-link">
                  Request Info <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING WORKFLOW */}
      <section className="process-section section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE WORKFLOW</span>
            <h2 className="section-title">How We Build</h2>
          </div>
          <div className="process-track">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="process-index">{step.index}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS & RESEARCH SHOWCASE */}
      <section className="projects-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">PROJECT PORTFOLIO</span>
            <h2 className="section-title">Products & Research Showcase</h2>
          </div>
          <div className="projects-wrapper">
            {productsList.map((product, idx) => (
              <ProjectCard
                key={idx}
                status={product.status}
                statusColor={product.statusColor}
                tags={product.tags}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION (Placeholder) */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">DOMAINS</span>
            <h2 className="section-title">Industries We Serve</h2>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3><i className="fas fa-heartbeat"></i> Healthcare & Bio</h3>
              <p>Biomedical signal analytics, ECG processing systems, and non-invasive patient monitors.</p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-industry"></i> Industrial IoT</h3>
              <p>Predictive maintenance sensors, telemetry dashboards, and MODBUS/CAN gateway architectures.</p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-home"></i> Smart Cities & Homes</h3>
              <p>Intelligent lighting control controllers, environmental monitors, and low-power mesh nodes.</p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-car"></i> Automotive & Power</h3>
              <p>Battery management systems (BMS), telemetry modules, and charging infrastructure interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION PROCESS */}
      <section className="section-padding" style={{ background: 'rgba(230, 0, 0, 0.01)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-header">
            <span className="section-subtitle">PARTNERSHIP</span>
            <h2 className="section-title">The Consultation Process</h2>
          </div>
          <p style={{ maxWidth: '650px', margin: '0 auto 40px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Starting a project with Albedrix is simple. We host an initial discovery call, draft a comprehensive technical 
            architecture document matching your BOM target budget, deliver early breadboard proofs-of-concept, and iterate 
            until production deployment.
          </p>
          <Link to="/contact" className="primary-btn magnetic">
            <span>Book A Discovery Call</span>
          </Link>
        </div>
      </section>
    </>
  );
}