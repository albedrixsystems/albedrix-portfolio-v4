import React from 'react';
import Timeline from '../components/Timeline/Timeline';
import '../styles/About.css';

export default function About() {
  const techGrid = [
    { icon: 'fa-brands fa-python', name: 'Python' },
    { icon: 'fa-solid fa-code', name: 'C / C++' },
    { icon: 'fa-brands fa-java', name: 'Java' },
    { icon: 'fa-brands fa-react', name: 'React' },
    { icon: 'fa-brands fa-node-js', name: 'Node.js' },
    { icon: 'fa-solid fa-n', name: 'Next.js' },
    { icon: 'fa-brands fa-docker', name: 'Docker' },
    { icon: 'fa-brands fa-aws', name: 'AWS' },
    { icon: 'fa-solid fa-leaf', name: 'MongoDB' },
    { icon: 'fa-solid fa-brain', name: 'TensorFlow' },
    { icon: 'fa-solid fa-fire', name: 'PyTorch' },
    { icon: 'fa-solid fa-eye', name: 'OpenCV' },
    { icon: 'fa-solid fa-microchip', name: 'STM32' },
    { icon: 'fa-solid fa-microchip', name: 'ESP32' },
    { icon: 'fa-brands fa-linux', name: 'Linux' },
    { icon: 'fa-brands fa-git-alt', name: 'Git' }
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <span className="section-subtitle">WHO WE ARE</span>
          <h1>ABOUT ALBEDRIX</h1>
          <p>
            Bridging bare-metal electrical engineering, high-performance edge intelligence, 
            and scalable software ecosystems.
          </p>
        </div>
      </div>

      {/* STORY & PHILOSOPHY */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Our Story</h2>
              <p>
                Albedrix Systems was founded by a team of engineers who recognized a critical disconnect: 
                hardware and software development were operating in separate silos. Startups and mature 
                enterprises alike struggled to integrate complex machine learning models onto resource-constrained 
                embedded devices without sacrificing latency or battery life.
              </p>
              <br />
              <p>
                We set out to change that by constructing a studio built specifically for full-spectrum engineering. 
                From low-level registers, custom PCB design, and RTOS configurations to cloud telemetry databases 
                and Edge AI modeling, we control the entire lifecycle of hardware-grade products.
              </p>
            </div>
            
            <div className="about-content">
              <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Engineering Philosophy</h2>
              <p>
                We believe that "good enough" is the enemy of reliability. When deploying systems into the field—whether 
                biomedical sensors, factory automation gateways, or smart grid equipment—there is no room for firmware 
                crashes or signal noise.
              </p>
              <br />
              <p>
                Our philosophy is grounded in extreme test coverage, rigorous math-driven modeling, and early prototype 
                validation. We don't just write scripts; we write clean, deterministically structured, memory-safe code 
                designed to run uninterrupted for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR VALUES</span>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
              <p>
                To empower innovators and businesses by engineering robust, highly-optimized physical products and 
                connected systems. We translate theoretical computation into physical, reliable, edge-computed reality.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-eye"></i> Our Vision</h3>
              <p>
                To become the premier engineering studio for high-risk, high-complexity systems where electronics, 
                artificial intelligence, and connectivity converge. We build the physical backbone of the next era.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-shield-alt"></i> Integrity First</h3>
              <p>
                We practice transparent, open engineering. Our customers receive complete source code, hardware 
                schematics, test logs, and comprehensive handovers with zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION (Why Albedrix) */}
      <section className="timeline-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE ALBEDRIX PROCESS</span>
            <h2 className="section-title">How We Guide Your Project</h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* TECH GRID SECTION */}
      <section className="technologies-section section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE STACK</span>
            <h2 className="section-title">Technology Ecosystem</h2>
          </div>
          <div className="tech-grid">
            {techGrid.map((tech, idx) => (
              <div key={idx} className="tech-card">
                <i className={tech.icon}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED CATEGORIES (Competence & Toolchains) */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">SPECIFICATIONS</span>
            <h2 className="section-title">Technical Competence & Toolchains</h2>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3><i className="fas fa-terminal"></i> Languages</h3>
              <p>
                <strong>C / C++</strong>: Embedded systems firmware, real-time control, and RTOS threads.<br />
                <strong>Python</strong>: Machine learning model prototyping, DSP data modeling, and tooling scripting.<br />
                <strong>Rust</strong>: Safe microkernel programming and high-performance server utilities.<br />
                <strong>JavaScript / TypeScript</strong>: Responsive web dashboards and cloud integrations.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-layer-group"></i> Frameworks & SDKs</h3>
              <p>
                <strong>ESP-IDF / STM32Cube</strong>: Low-level SDKs for peripheral control registers.<br />
                <strong>Vite / React / Next.js</strong>: Fast frontend frameworks supporting premium web applications.<br />
                <strong>Fastify / Node.js</strong>: Low-latency REST and WebSocket backend services.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-server"></i> Embedded Platforms</h3>
              <p>
                <strong>ARM Cortex-M4/M7/A72</strong>: Main controllers for general processing.<br />
                <strong>ESP32 (Tensilica)</strong>: Wireless mesh nodes (Wi-Fi, Bluetooth, ESP-NOW).<br />
                <strong>NVIDIA Jetson Nano / Raspberry Pi</strong>: Edge gateways and multi-channel camera pipelines.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-brain"></i> Edge AI Stack</h3>
              <p>
                <strong>TensorFlow Lite / ONNX Runtime</strong>: Model compilation and cross-platform edge execution.<br />
                <strong>PyTorch / OpenCV</strong>: Computational computer vision training and camera transforms.<br />
                <strong>Edge Impulse</strong>: Data gathering and feature scaling for biosignal classification.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-tools"></i> Development & HW Workflow</h3>
              <p>
                <strong>Debug</strong>: JTAG / SWD probes, logic analyzers, and digital oscilloscopes.<br />
                <strong>ECAD</strong>: Altium Designer and KiCAD for multilayer PCB design & routing.<br />
                <strong>Infra</strong>: Docker containers, GitHub actions CI/CD, and Git version control.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-lock"></i> Protocol & Security</h3>
              <p>
                <strong>Protocols</strong>: MQTT, Modbus, CAN-bus, WebSocket, I2C, SPI, UART.<br />
                <strong>Security</strong>: TLS/SSL sockets, OTA firmware signed encryption, and OAuth authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section-padding" style={{ background: 'rgba(230, 0, 0, 0.01)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE MINDSHARE</span>
            <h2 className="section-title">Our Technical Leadership</h2>
          </div>
          
          <div className="team-grid">
            <div className="team-card founder-card">
              <img src="/Nikesh Babu.png" alt="Nikesh Babu" className="team-bg-img" />
              <h3>Nikesh Babu</h3>
              <div className="team-role founder-role">Founder</div>
            </div>
            
            <div className="team-card">
              <img src="/Abubackar Siddiq.png" alt="Abubackar Siddiq" className="team-bg-img" />
              <h3>Abubackar Siddiq</h3>
              <div className="team-role">Software Developer</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
