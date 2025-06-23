import React from 'react';
import { Zap, Shield, TrendingUp, Users, Code, Globe, Star, Clock, ArrowRight, ChevronLeft, Lightbulb } from 'lucide-react';
import { SECTIONS } from '../../utils/constants';

const ApaleoAnalysis = ({ onSectionChange }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          Apaleo Competitive Analysis
        </h1>
        <p className="text-lg text-base-content/80">
          Understanding Apaleo's unique advantages and why partners choose our ecosystem over competitors.
        </p>
      </div>

      {/* Unique Advantages */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-primary text-center justify-center">
            <Star className="w-6 h-6 mr-2" />
            Three Unique Advantages for Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">True API-First Architecture</h3>
              <p className="text-base-content/80 text-sm">
                Built API-first from day one, not retrofitted onto legacy systems like many competitors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Implementation Speed</h3>
              <p className="text-base-content/80 text-sm">
                Partners go live in weeks, not months, enabling faster time-to-revenue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Genuinely Open Ecosystem</h3>
              <p className="text-base-content/80 text-sm">
                A 250+ app marketplace with zero vendor lock-in and complete data ownership for hotels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Comparison */}
      <div className="card bg-base-200/50 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6 text-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary mr-2" />
            Competitive Landscape Analysis
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="text-primary">Apaleo</th>
                  <th>Oracle</th>
                  <th>Mews</th>
                  <th>Cloudbeds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">API-First</td>
                  <td><span className="badge badge-primary badge-outline">Native</span></td>
                  <td><span className="badge badge-ghost">Retrofitted</span></td>
                  <td><span className="badge badge-ghost">Hybrid</span></td>
                  <td><span className="badge badge-ghost">Limited</span></td>
                </tr>
                <tr>
                  <td className="font-semibold">API Speed</td>
                  <td className="font-bold text-primary">&lt;500ms</td>
                  <td className="text-base-content/70">~2000ms</td>
                  <td className="text-base-content/70">~800ms</td>
                  <td className="text-base-content/70">~1500ms</td>
                </tr>
                <tr>
                  <td className="font-semibold">Integration Fees</td>
                  <td className="font-bold text-primary">€0</td>
                  <td className="text-base-content/70">€5K-15K</td>
                  <td className="text-base-content/70">€2K-8K</td>
                  <td className="text-base-content/70">€1K-5K</td>
                </tr>
                <tr>
                  <td className="font-semibold">Implementation</td>
                  <td className="font-bold text-primary">2 weeks</td>
                  <td className="text-base-content/70">3-6 months</td>
                  <td className="text-base-content/70">4-8 weeks</td>
                  <td className="text-base-content/70">6-12 weeks</td>
                </tr>
                 <tr>
                  <td className="font-semibold">Webhooks</td>
                  <td><span className="badge badge-primary badge-outline">Real-time</span></td>
                  <td><span className="badge badge-ghost">Polling</span></td>
                  <td><span className="badge badge-ghost">Limited</span></td>
                  <td><span className="badge badge-ghost">Basic</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Technical & Business Advantages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-xl mb-4">
              <Code className="w-5 h-5 text-primary mr-2" />
              Technical Excellence
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start"><Zap size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">MACH Architecture</span><p className="text-sm text-base-content/80">Microservices, API-first, Cloud-native, Headless design.</p></div></li>
              <li className="flex items-start"><Shield size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">Enterprise Security</span><p className="text-sm text-base-content/80">OAuth 2.0, SOC 2, GDPR ready.</p></div></li>
              <li className="flex items-start"><Clock size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">Real-time Sync</span><p className="text-sm text-base-content/80">Webhook-driven architecture ensures instant data sync.</p></div></li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-200/50 hover:bg-base-200 transition-all duration-300 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-xl mb-4">
              <Users className="w-5 h-5 text-primary mr-2" />
              Business Advantages
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start"><TrendingUp size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">Rapid Market Entry</span><p className="text-sm text-base-content/80">Go live in weeks, not months.</p></div></li>
              <li className="flex items-start"><Star size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">Zero Hidden Costs</span><p className="text-sm text-base-content/80">Partners keep 100% of their revenue.</p></div></li>
              <li className="flex items-start"><Globe size={18} className="text-primary mt-1 mr-3 flex-shrink-0" /><div><span className="font-semibold">Innovation-First Culture</span><p className="text-sm text-base-content/80">Agent Hub AI marketplace demonstrates continued platform innovation and AI integration leadership.</p></div></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partner Impact */}
      <div className="card bg-primary text-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-2 justify-center">
            <Lightbulb className="w-6 h-6 mr-2" />
            What This Means for Partners
          </h2>
          <p className="text-center text-lg leading-relaxed max-w-3xl mx-auto">
            These advantages translate to <span className="font-bold">3x faster time-to-market</span>, <span className="font-bold">60-80% lower development costs</span>, and <span className="font-bold">higher customer satisfaction</span> through superior performance.
          </p>
        </div>
      </div>

      {/* Why Partners Choose Apaleo */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-primary text-center justify-center">
            Why Partners Choose Apaleo Over Competitors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">For Early-Stage Partners</h3>
              <ul className="space-y-2 text-sm text-base-content/80">
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Zero upfront integration costs vs. €5K-15K</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>2-week implementation for rapid validation</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>No technical debt from day one</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Access to 250+ app ecosystem for partnership opportunities</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">For Established Partners</h3>
              <ul className="space-y-2 text-sm text-base-content/80">
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Enterprise-grade reliability and security</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Real-time webhooks for sophisticated automation</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Future-proof platform with AI innovation</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>No vendor lock-in - complete data portability and platform independence</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
        <div className="card-body p-6">
          <div className="text-center">
            <h2 className="card-title justify-center text-xl">Platform Advantages are Clear</h2>
            <p className="text-base-content/70 mt-1">
              Now let's meet Straiv, a partner who leveraged these exact advantages for rapid growth.
            </p>
          </div>
          <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange(SECTIONS.PARTNER_PROFILE)}
            >
              Step 3: Meet Straiv <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange(SECTIONS.MARKET_ANALYSIS)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Market Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApaleoAnalysis; 