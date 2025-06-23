import React, { useState } from 'react';
import { 
  ExternalLink, 
  BarChart3, 
  Globe, 
  Brain, 
  Users, 
  Zap, 
  Search,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import { SECTIONS } from '../../utils/constants';

const Sources = ({ onSectionChange }) => {
  const [activeCategory, setActiveCategory] = useState('benchmarks');
  const [searchTerm, setSearchTerm] = useState('');

  const sourceCategories = {
    benchmarks: {
      title: 'Industry Benchmarks',
      icon: BarChart3,
      color: 'text-primary',
      sources: [
        { title: "2024 Lodging Technology Study", org: "Hospitality Technology", key: "Comprehensive hospitality technology benchmarks and conversion metrics." },
        { title: "Hotel Tech Benchmark: Booking Engines 2023", org: "Skift Research", key: "Direct booking technology performance and conversion optimization data." },
        { title: "Travel websites: conversion rate by device 2024", org: "Statista", key: "Mobile vs desktop conversion rates showing 2.6% vs 7.6% gap." },
        { title: "Customer Onboarding Checklist Completion Rate: 2024 Benchmark", org: "Userpilot", key: "Onboarding completion benchmarks showing 19.2% industry average." },
        { title: "Mobile App Conversion Rate Benchmarks & Tips for 2025", org: "UXCam", key: "Mobile app conversion optimization strategies and industry benchmarks." },
        { title: "Why Digital Check-In Is Important to Hotels & Guests", org: "Canary Technologies", key: "Digital check-in adoption rates and guest preference data." },
      ]
    },
    market: {
      title: 'Market Intelligence',
      icon: Globe,
      color: 'text-secondary',
      sources: [
        { title: "Global market size of the hospitality industry 2023", org: "Statista", key: "€187.9 billion European hotel market size and growth projections." },
        { title: "Europe Hotels Industry Market Analysis 2024", org: "TruerCatering", key: "Comprehensive European hotel industry analysis with 60% independent hotel market." },
        { title: "DACH Region Hotels & Chains Report 2024", org: "Horwath HTL", key: "DACH region hotel market analysis and growth opportunities." },
        { title: "Smart Hospitality Market | Size, Growth | 2024 to 2029", org: "Market Data Forecast", key: "26.18% CAGR growth in smart hospitality market through 2029." },
      ]
    },
    technology: {
      title: 'Technology Studies',
      icon: Brain,
      color: 'text-accent',
      sources: [
        { title: "AI Statistics in Hospitality: Insights for Industry Innovation", org: "All About AI", key: "80% hotel AI adoption statistics and guest satisfaction improvements." },
        { title: "Hotel Technology Trends to Watch in 2024 and Beyond", org: "Skift", key: "Key technology trends shaping the future of the hospitality industry." },
        { title: "The Ultimate Guide to Hotel APIs and Integrations", org: "SiteMinder", key: "Best practices for API integrations and ecosystem connectivity in hospitality." },
      ]
    },
    partner: {
      title: 'Partner Profiles',
      icon: Users,
      color: 'text-info',
      sources: [
        { title: "apaleo Store & API Documentation", org: "apaleo", key: "Primary documentation for apaleo's platform capabilities and API specifications." },
        { title: "Straiv Company Website", org: "Straiv", key: "Official company information, product offerings, and mission statement." },
        { title: "Mews Marketplace - Straiv Profile", org: "Mews", key: "Comparative analysis of Straiv's integration and positioning on a competing platform." },
      ]
    },
    integration: {
      title: 'Integration Research',
      icon: Zap,
      color: 'text-warning',
      sources: [
        { title: "The state of API security in 2024", org: "SmartBear", key: "API security best practices and emerging threats." },
        { title: "OAuth 2.0 and OpenID Connect Best Practices", org: "Okta", key: "Secure authentication and authorization patterns for modern applications." },
        { title: "Designing a Great API: Best Practices Guide", org: "Red Hat", key: "Principles of robust and scalable API design and architecture." },
      ]
    }
  };

  const filteredSources = sourceCategories[activeCategory].sources.filter(source =>
    source.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    source.org.toLowerCase().includes(searchTerm.toLowerCase()) ||
    source.key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          Research & Sources
        </h1>
        <p className="text-lg text-base-content/80">
          The curated data and intelligence that powered this case study, organized by research category.
        </p>
      </div>

      {/* Main Content */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          {/* Category Tabs */}
          <div className="tabs tabs-boxed bg-base-100/50 justify-center mb-6">
            {Object.entries(sourceCategories).map(([key, { title, icon: Icon, color }]) => (
              <a
                key={key}
                className={`tab tab-lg gap-2 ${activeCategory === key ? 'tab-active !bg-primary text-primary-content' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <Icon className={`w-5 h-5 ${activeCategory !== key ? color : ''}`} /> {title}
              </a>
            ))}
          </div>

          {/* Search and Results */}
          <div>
            <div className="form-control mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder={`Search in ${sourceCategories[activeCategory].title}...`}
                  className="input input-bordered w-full pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-base-content/40" />
              </div>
            </div>

            {/* Source List */}
            <div className="space-y-4">
              {filteredSources.length > 0 ? (
                filteredSources.map((source, index) => (
                  <div key={index} className="card card-compact bg-base-100/50 border border-base-300/50">
                    <div className="card-body">
                      <h3 className="card-title text-base">{source.title}</h3>
                      <p className="text-sm text-base-content/70"><span className="font-semibold">{source.org}</span> — {source.key}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-ghost btn-sm">
                          View Source <ExternalLink className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-base-content/60">No sources found for your search term.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
        <div className="card-body p-6 text-center">
          <h2 className="card-title justify-center text-2xl">Thank You for Your Time</h2>
          <p className="text-base-content/70 mt-1 max-w-2xl mx-auto">
            This concludes the case study. The research presented here forms the foundation for a successful partnership strategy.
          </p>
          <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange(SECTIONS.USE_CASE_DEMO)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Use Case
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange(SECTIONS.OVERVIEW)}
            >
              Back to Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources; 