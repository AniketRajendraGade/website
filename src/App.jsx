import { useState } from 'react';
import { BarChart, ChevronRight, Settings, Wrench, LineChart } from 'lucide-react';
import './App.css';
import insightImage from './assets/Insight.webp';
import team from './assets/Team.webp';
import featureCardsImage from './assets/table.webp';

function App() {
  return (
    <div className="app-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-icon"></div>
          <span className="logo-text">AURA BI</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Turn Your Data into Action. Instantly.</h1>
            <p className="hero-subtitle">
              Aura BI helps you transform scattered data into powerful insights
              that drive growth — fast
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img 
                src={team} 
                alt="Team collaborating around a table with data visualizations" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h2 className="stat-number">90%</h2>
            <p className="stat-description">
              Of data in organizations is never used for strategic decisions, despite being available.
            </p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">3.5x</h2>
            <p className="stat-description">
              Companies using BI effectively are 3.5x more likely to outperform peers in revenue growth.
            </p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">~15.4 tn</h2>
            <p className="stat-description">
              Annual revenue potential unlocked through scaled BI and analytics—every delay costs you.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="section-container">
          <h2 className="section-title">What We Do</h2>
          
          <div className="content-row">
            <div className="image-column">
              <div className="image-wrapper">
                <div className="image-overlay">
                  <img 
                    src={insightImage} 
                    alt="Data visualization interface" 
                  />
                </div>
              </div>
            </div>
            <div className="text-column">
              <p className="text-paragraph">
                At Aura BI, we simplify the complex world of data.
                Our platform empowers businesses to turn scattered, underutilized
                data into meaningful insights — fast.
              </p>
              <p className="text-paragraph">
                We offer ready-to-plug dashboards designed for sales, marketing,
                finance, operations, and more — so you don't start from scratch. Just
                connect your data, and you're ready to go.
              </p>
              <p className="text-paragraph">
                From real-time reporting and automated insights to seamless data
                integration across systems, we help you make smarter, faster
                decisions that truly drive growth.
              </p>
              <p className="text-paragraph">
                From data to decisions — we make it seamless, smart, and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
      <div className="section-container">
        <div className="features-layout">
          <div className="features-column">
            <div className="features-grid">
              {/* Image of feature cards */}
              <img 
                src={featureCardsImage} 
                alt="Aura BI Features - Real-time dashboards, automated reporting, data integration, advanced analytics, and role-based access" 
                className="feature-cards-image"
              />
            </div>
          </div>
          
          <div className="why-column">
            <h2 className="why-title">Why Aura BI?</h2>
            <p className="why-subtitle">
              Smarter features. Real results.
            </p>
            <p className="why-description">
              Aura BI is designed to do the heavy lifting — so you spend less time crunching numbers and more time growing your business.
            </p>
            <p className="why-description">
              Here's how we help you turn your data into a powerful growth engine.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <h2 className="specialization-title">
            At Aura BI, we specialize in everything Business Intelligence
          </h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-header">
                <Settings size={24} className="service-icon" />
                <h3 className="service-title">Plug & Play Dashboards</h3>
              </div>
              <p className="service-subtitle">Pre-built | Industry-Specific | Ready in Minutes</p>
              <p className="service-description">
                Skip the setup. Our Plug & Play Dashboards are ready-made templates
                built for sectors like Banking, Retail, Pharma, and more. Get instant
                visibility into KPIs, trends, and operational metrics — with zero hassle.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-header">
                <BarChart size={24} className="service-icon" />
                <h3 className="service-title">BI Strategy</h3>
              </div>
              <p className="service-subtitle">Data Roadmapping | Modernization | Platform Selection | Data Governance</p>
              <p className="service-description">
                We help you lay the right BI foundation. From choosing the right tools
                to defining a clear roadmap, we align your BI strategy with your
                business vision.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-header">
                <Wrench size={24} className="service-icon" />
                <h3 className="service-title">BI Solution Engineering</h3>
              </div>
              <p className="service-subtitle">Dashboard Development | Data Modeling | Visualization | Tool Integration</p>
              <p className="service-description">
                We design and build custom BI dashboards and reporting tools that
                deliver real-time, actionable insights. Clean. Fast. Business-ready.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-header">
                <LineChart size={24} className="service-icon" />
                <h3 className="service-title">Maintenance & Optimization</h3>
              </div>
              <p className="service-subtitle">Performance Tuning | Data Quality Checks | Scalability Support</p>
              <p className="service-description">
                Your BI should evolve with your business. We ensure your data pipelines, reports, and dashboards stay optimized and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact Us</h2>
          
          <div className="contact-card">
            <h3 className="contact-title">Aura BI</h3>
            <p className="contact-address">WA, Wakad, Pune, MH 411057</p>
            <p className="contact-email">Demo@aurabi.com</p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="social-section">
        <div className="section-container">
          <h2 className="section-title">Connect With Us</h2>
          
          <div className="social-links">
            <a href="#" className="social-link">
              <div className="linkedin-icon">
                <span>in</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="copyright">Copyright © 2025 Aura BI - All Rights Reserved.</p>
          {/* <p className="powered-by">Powered by</p>
          <div className="footer-logo">
            <img 
              src="/api/placeholder/120/30" 
              alt="GoDaddy" 
            />
            <h3>Markyitcs</h3>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;