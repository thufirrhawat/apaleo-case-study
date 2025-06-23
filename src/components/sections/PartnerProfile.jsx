import React from 'react';
import { Users, Target, TrendingUp, Smartphone, Clock, ArrowRight, ChevronLeft, Building, Globe, Star } from 'lucide-react';
import { SECTIONS } from '../../utils/constants';
import straivLogo from '../../assets/images/straiv-logo.png';

const PartnerProfile = ({ onSectionChange }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          Partner Profile & Objectives
        </h1>
        <p className="text-lg text-base-content/80">
          Introducing Straiv: The German hospitality technology leader seeking strategic partnership with Apaleo to accelerate European market expansion
        </p>
      </div>

      {/* Company Overview */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 text-center sm:text-left justify-center">
            <div className="w-20 h-20 bg-white rounded-lg shadow-lg p-2 flex items-center justify-center">
              <img src={straivLogo} alt="Straiv Logo" className="max-w-full max-h-full object-contain" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">Straiv</h2>
              <p className="text-base-content/70">German Hospitality Technology Leader</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">3,000+</div>
              <div className="text-base-content/70 mt-1">Current Customer Base</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">29</div>
              <div className="text-base-content/70 mt-1">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98.89%</div>
              <div className="text-base-content/70 mt-1">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Details & Value Prop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg h-full">
          <div className="card-body justify-center">
            <h3 className="card-title text-xl mb-4 text-center justify-center"><Building className="w-5 h-5 text-primary mr-2" />Company Profile</h3>
            <ul className="space-y-3 ">
              <li><p><span className="font-semibold text-primary/80">FOCUS:</span> Progressive Web App Technology</p></li>
              <li><p><span className="font-semibold text-primary/80">TECH:</span> No-download mobile experience & digital guest journey</p></li>
              <li><p><span className="font-semibold text-primary/80">SEGMENT:</span> Independent hotels & hotel chains across Europe</p></li>
              <li><p><span className="font-semibold text-primary/80">GEOGRAPHY:</span> Germany-based, expanding across 29 countries</p></li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg h-full">
          <div className="card-body justify-center">
            <h3 className="card-title text-xl mb-4 text-center justify-center"><Target className="w-5 h-5 text-primary mr-2" />Value Proposition</h3>
            <ul className="space-y-3">
                <li className="flex items-start"><Smartphone size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">No-Download Experience</span><p className="text-sm text-base-content/80">PWA technology eliminates app store friction for instant guest access.</p></div></li>
                <li className="flex items-start"><Clock size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">Operational Efficiency</span><p className="text-sm text-base-content/80">3-5 minute time savings per check-in through automation.</p></div></li>
                <li className="flex items-start"><TrendingUp size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">Revenue Optimization</span><p className="text-sm text-base-content/80">5-10% additional service bookings through digital upselling.</p></div></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Integration Objectives */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-primary text-center justify-center">
            <Star className="w-6 h-6 mr-2" />
            Why Partner with Apaleo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Technical Objectives</h3>
              <ul className="space-y-2 text-sm text-base-content/80">
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Seamless real-time data sync with hotel PMS systems</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Leverage 99.9999% uptime for enterprise reliability</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Rapid feature development via Apaleo's API ecosystem</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Business Objectives</h3>
              <ul className="space-y-2 text-sm text-base-content/80">
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Access to innovation-focused Apaleo hotel network</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Rapid market entry (weeks not months implementation)</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Zero integration fees protecting profit margins</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Strategic Objectives</h3>
              <ul className="space-y-2 text-sm text-base-content/80">
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Establish market leadership in PWA hospitality solutions</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Leverage Apaleo's growth & ecosystem partnerships</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Future-proof platform through MACH architecture</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
        <div className="card-body p-6">
          <div className="text-center">
            <h2 className="card-title justify-center text-xl">From Partner Vision to Technical Reality</h2>
            <p className="text-base-content/70 mt-1">
              Now that you understand Straiv's vision, let's see how their integration works.
            </p>
          </div>
          <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange(SECTIONS.INTEGRATION_WORKFLOW)}
            >
              Step 4: Integration Workflow <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange(SECTIONS.APALEO_ANALYSIS)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Platform Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile; 