import React from 'react';
import { Search, BarChart3, Target, Settings, CheckCircle, ArrowRight, Lightbulb, ChevronLeft } from 'lucide-react';
import { SECTIONS } from '../../utils/constants';

const Methodology = ({ onSectionChange }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          Research Methodology
        </h1>
        <p className="text-lg text-base-content/80">
          Systematic approach to partner integration analysis - ensuring every technical decision connects to measurable business impact for hotels and guests
        </p>
      </div>

      {/* Core Philosophy */}
      <div className="card bg-base-200 shadow-xl border border-base-300 mx-auto">
        <div className="card-body text-center items-center">
          <h2 className="card-title text-2xl mb-2 text-primary">
            <Lightbulb className="w-6 h-6 mr-2" />
            Strategic Partner Analysis Framework
          </h2>
          <p className="text-base-content/80 leading-relaxed">
            I approached this like a real partner integration project. App Success Managers need both strategic thinking and partner empathy - understanding not just what to build, but how to guide partners through complex integration decisions that drive mutual success.
          </p>
        </div>
      </div>

      {/* Methodology Steps -> Four Research Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="card-title text-lg">Market Intelligence</h3>
            </div>
            <ul className="space-y-2 text-sm text-base-content/80">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Analyzed €36B digital guest journey opportunity and 267% growth drivers</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Identified staffing crisis (67% shortage) creating automation urgency</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Mapped guest expectation shifts driving contactless adoption (96%)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="card-title text-lg">Competitive Analysis</h3>
            </div>
            <ul className="space-y-2 text-sm text-base-content/80">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Evaluated Apaleo vs Oracle OPERA implementation speeds (days vs months)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Quantified cost advantages (€0 integration fees vs thousands)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Assessed ecosystem strength (250+ apps vs &lt;50 competitors)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="card-title text-lg">Technical Assessment</h3>
            </div>
            <ul className="space-y-2 text-sm text-base-content/80">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Reviewed Apaleo API documentation for PWA integration requirements</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Evaluated webhook capabilities for real-time guest experience</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Assessed MACH architecture benefits for partner development speed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="card-title text-lg">Partner Success Framework</h3>
            </div>
            <ul className="space-y-2 text-sm text-base-content/80">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Mapped Straiv's 3,000+ hotel customer base to market opportunity</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Identified PWA technology as perfect fit for Apaleo's headless architecture</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Calculated ROI potential (22-170%) for hotel implementations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="card bg-base-200/50 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-primary mr-2" />
            Integration Analysis Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-primary-content font-bold text-lg mb-3">1</div>
              <h4 className="font-semibold mb-1">Market Context</h4>
              <p className="text-sm text-base-content/70">Understand hospitality industry forces driving partner customer needs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-primary-content font-bold text-lg mb-3">2</div>
              <h4 className="font-semibold mb-1">Platform Analysis</h4>
              <p className="text-sm text-base-content/70">Evaluate Apaleo's competitive advantages and technical capabilities</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-primary-content font-bold text-lg mb-3">3</div>
              <h4 className="font-semibold mb-1">Technical Requirements</h4>
              <p className="text-sm text-base-content/70">Map integration complexity and API requirements</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-primary-content font-bold text-lg mb-3">4</div>
              <h4 className="font-semibold mb-1">Success Framework</h4>
              <p className="text-sm text-base-content/70">Design mutual value creation for partner and hotel success</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Approach Works */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-primary text-center justify-center">Why This Methodology Works for App Success Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Strategic Thinking</h3>
              <p className="text-base-content/80 text-sm">
                Partners need App Success Managers who understand market context, not just technical integration. This methodology ensures every technical decision connects to measurable hotel ROI.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Partner Empathy</h3>
              <p className="text-base-content/80 text-sm">
                By researching partner challenges and competitive landscape first, I can guide integration decisions that genuinely accelerate their market success, not just complete API connections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What's Next CTA */}
      <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
        <div className="card-body p-6">
          <div className="text-center">
            <h2 className="card-title justify-center text-xl">Ready to See This Methodology in Action?</h2>
            <p className="text-base-content/70 mt-1">
              Now that you understand my approach, let's dive into the first step: analyzing the market forces that create opportunities for digital guest journey partners like Straiv.
            </p>
          </div>
          <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange(SECTIONS.MARKET_ANALYSIS)}
            >
              Next Step: Analysis <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange(SECTIONS.OVERVIEW)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology; 