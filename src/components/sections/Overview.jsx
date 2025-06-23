import React from 'react';
import { ChevronRight, Zap, Target, BarChartBig, CircleDollarSign } from 'lucide-react';
import { SECTIONS } from '../../utils/constants';
import nuriPp from '../../assets/images/nuri-pp.png';

const Overview = ({ onSectionChange }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Title Section */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          App Success Manager Case Study
        </h1>
        <p className="text-lg text-base-content/80">
          Strategic analysis of the €36B digital guest journey opportunity and how Straiv's Progressive Web App solution can accelerate market capture through Apaleo's API-first platform
        </p>
      </div>
      
      {/* Author & CTA Section */}
      <div className="space-y-8">
        {/* Author Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={nuriPp} alt="Nurettin Ünal" />
            </div>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nurettin-unal-360871233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold link link-hover link-primary"
            >
              Nurettin Ünal
            </a>
            <p className="text-base-content/70">App Success Manager Candidate for Apaleo  </p>
          </div>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="tooltip w-full" data-tip="Market sizing from HotelTechReport 2025 + MarketsandMarkets">
            <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg h-full">
              <div className="card-body items-center text-center p-6">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <BarChartBig className="w-6 h-6 text-primary" />
                </div>
                <h2 className="card-title">Market Opportunity Analysis</h2>
                <p className="text-sm text-base-content/70">Identified €36B digital guest journey market expansion (267% growth) driven by 67% hotel staffing shortages and 96% guest demand for contactless solutions.</p>
                <div className="text-xs text-base-content/60 mt-4 space-y-1 text-center self-stretch">
                  <p><strong>Market Size (2025-2028):</strong> €36B</p>
                  <p><strong>Growth Rate:</strong> 267%</p>
                  <p><strong>Hotel Labor Shortage:</strong> 67%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tooltip w-full" data-tip="Based on Apaleo's MACH architecture vs Oracle OPERA implementation times">
            <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg h-full">
              <div className="card-body items-center text-center p-6">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="card-title">Platform Advantage Assessment</h2>
                <p className="text-sm text-base-content/70">Evaluated Apaleo's MACH architecture delivering 50-70% faster implementations vs legacy systems, enabling rapid partner time-to-market and competitive positioning.</p>
                <div className="text-xs text-base-content/60 mt-4 space-y-1 text-center self-stretch">
                  <p><strong>Implementation Speed:</strong> Days vs Months</p>
                  <p><strong>Integration Partners:</strong> 250+ Apps</p>
                  <p><strong>Integration Fees:</strong> €0</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tooltip w-full" data-tip="Real partner case study: Straiv's PWA solution with proven metrics">
            <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg h-full">
              <div className="card-body items-center text-center p-6">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="card-title">Partner Success Strategy</h2>
                <p className="text-sm text-base-content/70">Developed integration roadmap for Straiv's Progressive Web App solution serving 3,000+ hotels, focusing on API optimization and measurable hotel ROI.</p>
                <div className="text-xs text-base-content/60 mt-4 space-y-1 text-center self-stretch">
                  <p><strong>Partner Hotels:</strong> 3,000+</p>
                  <p><strong>Customer Satisfaction:</strong> 98.89%</p>
                  <p><strong>Time Saved/Check-in:</strong> 3-5 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tooltip w-full" data-tip="ROI calculations from digital guest journey implementations">
            <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg h-full">
              <div className="card-body items-center text-center p-6">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <CircleDollarSign className="w-6 h-6 text-primary" />
                </div>
                <h2 className="card-title">Business Impact Quantification</h2>
                <p className="text-sm text-base-content/70">Translated technical integration capabilities into measurable business outcomes: 22-170% ROI within 12 months through operational efficiency and revenue optimization.</p>
                <div className="text-xs text-base-content/60 mt-4 space-y-1 text-center self-stretch">
                  <p><strong>ROI Range (12 months):</strong> 22-170%</p>
                  <p><strong>Additional Revenue:</strong> 5-10%</p>
                  <p><strong>Operational Efficiency:</strong> 30-40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
          <div className="card-body">
            <div className="text-center">
              <h2 className="card-title justify-center text-xl">Strategic Partner Integration Analysis</h2>
              <p className="text-base-content/70 mt-1">
                Deep dive into how Apaleo's API-first platform can accelerate Straiv's market expansion and hotel value delivery
              </p>
            </div>
            <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => onSectionChange(SECTIONS.METHODOLOGY)}
              >
                Begin Analysis →
              </button>
              <button
                className="btn btn-outline btn-lg"
                onClick={() => onSectionChange(SECTIONS.USE_CASE_DEMO)}
              >
                View Executive Summary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
