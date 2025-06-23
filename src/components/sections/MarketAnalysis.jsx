import React from 'react';
import { Users, BarChart3, ArrowRight, ChevronLeft, Info, Rocket, CircleDollarSign, Clock } from 'lucide-react';
import { SECTIONS } from '../../utils/constants';

const StatWithTooltip = ({ value, title, tooltip }) => (
  <div className="tooltip tooltip-bottom" data-tip={tooltip}>
    <div className="stat place-items-center cursor-help">
      <div className="stat-value text-primary">{value}</div>
      <div className="stat-title text-base-content/80 flex items-center gap-1">
        {title}
        <Info size={14} className="opacity-50" />
      </div>
    </div>
  </div>
);

const MarketAnalysis = ({ onSectionChange }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          Market Intelligence 2025
        </h1>
        <p className="text-lg text-base-content/80">
          Three converging forces create an unprecedented €36B opportunity for digital guest journey partners on Apaleo's platform
        </p>
      </div>

      {/* Top Metrics Section */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-base-300/50">
            <StatWithTooltip 
              value="€36B" 
              title="Market Expansion (2025-2028)" 
              tooltip="HotelTechReport + MarketsandMarkets research"
            />
            <StatWithTooltip 
              value="67%" 
              title="Hotels Face Staffing Crisis" 
              tooltip="Hospitality industry labor shortage data"
            />
            <StatWithTooltip 
              value="86%" 
              title="Guests Choose Contactless Hotels" 
              tooltip="Oracle Consumer Research Study 2025"
            />
          </div>
        </div>
      </div>
      
      {/* Guest Behavior Revolution Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-200/50 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-2">
              <Users className="text-primary mr-2"/>
              The Guest Expectation Shift
            </h2>
            <p className="mb-4 text-base-content/80">Permanent behavior changes creating massive partner opportunities.</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center gap-4 p-3 bg-base-100/50 rounded-lg">
                <span className="font-medium">Choose hotels with contactless check-in</span>
                 <div className="tooltip tooltip-left" data-tip="Source: Oracle Survey">
                  <div className="text-2xl font-bold text-primary">86%</div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4 p-3 bg-base-100/50 rounded-lg">
                <span className="font-medium">Want to control their stay from a smartphone</span>
                <div className="tooltip tooltip-left" data-tip="Source: Statista">
                  <div className="text-2xl font-bold text-primary">73%</div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4 p-3 bg-base-100/50 rounded-lg">
                <span className="font-medium">Abandon checkout without preferred payments (Gen Z)</span>
                 <div className="tooltip tooltip-left" data-tip="Source: Canary Technologies">
                  <div className="text-2xl font-bold text-primary">65%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200/50 shadow-lg">
           <div className="card-body">
            <h2 className="card-title text-2xl mb-4">
              Why This Opportunity Is Unprecedented
            </h2>
            <ul className="space-y-3 text-base-content/80">
              <li className="flex items-start gap-3 p-3 bg-base-100/50 rounded-lg">
                <Rocket size={24} className="text-primary mt-1 flex-shrink-0"/>
                <div>
                  <h4 className="font-bold">Critical Mass Achieved</h4>
                  <span>"96% of hotels now have digital solutions - the market has moved from early adoption to optimization and integration"</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-base-100/50 rounded-lg">
                <CircleDollarSign size={24} className="text-primary mt-1 flex-shrink-0"/>
                <div>
                  <h4 className="font-bold">Investment Confidence</h4>
                  <span>"$1B+ annual VC funding demonstrates investor confidence in sustainable returns, not just pandemic response"</span>
                </div>
              </li>
               <li className="flex items-start gap-3 p-3 bg-base-100/50 rounded-lg">
                <Clock size={24} className="text-primary mt-1 flex-shrink-0"/>
                <div>
                  <h4 className="font-bold">Urgency Window</h4>
                  <span>"67% staffing shortage makes automation a survival necessity - hotels must act now or risk operational collapse"</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Technology Reality Section */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
           <h2 className="card-title text-2xl mb-6 text-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary mr-2" />
            Platform Advantages Create Partner Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-base-100/50 rounded-lg">
              <h3 className="font-semibold mb-2">Speed Advantage</h3>
              <p className="text-sm text-base-content/80">
                API-first platforms deliver integrations in days vs months for legacy systems. Partners reach revenue faster.
              </p>
            </div>
             <div className="p-4 bg-base-100/50 rounded-lg">
              <h3 className="font-semibold mb-2">Cost Advantage</h3>
              <p className="text-sm text-base-content/80">
                Zero integration fees vs thousands for Oracle connections. Partners can offer competitive pricing.
              </p>
            </div>
             <div className="p-4 bg-base-100/50 rounded-lg">
              <h3 className="font-semibold mb-2">ROI Proof</h3>
              <p className="text-sm text-base-content/80">
                22-170% returns in first year prove sustainable business model for hotel customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Insight Box */}
      <div className="card bg-base-200 shadow-xl border-primary border-2">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl text-primary">The Strategic Insight for App Success Managers</h2>
          <p className="text-base-content/80 max-w-2xl">
            This isn't about selling technology - it's about enabling hotel survival and growth. Partners who can deliver immediate operational relief while enhancing guest experience will capture disproportionate market share in this €36B expansion.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
        <div className="card-body p-6">
          <div className="text-center">
            <h2 className="card-title justify-center text-xl">Market Context is Clear?</h2>
            <p className="text-base-content/70 mt-1">
              Next, let's examine why Apaleo's MACH architecture makes it the ideal platform for partners like Straiv.
            </p>
          </div>
          <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange(SECTIONS.APALEO_ANALYSIS)}
            >
              Step 2: Platform Advantages <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange(SECTIONS.METHODOLOGY)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Methodology
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis; 