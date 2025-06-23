import React, { useState } from 'react';
import { ArrowRight, Code, Users, CheckCircle, Settings, Rocket, AlertCircle, ChevronLeft, ChevronRight, CheckSquare, Layers, Server, Target } from 'lucide-react';
import { SECTIONS } from '../../utils/constants';

const IntegrationWorkflow = ({ onSectionChange }) => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const integrationPhases = [
    { title: "Discovery", icon: Users, steps: ["Partner technical assessment", "Integration architecture planning", "API scope & timeline defined"] },
    { title: "Authentication", icon: Settings, steps: ["OAuth app registration", "Scope permissions configured", "Test environment validated"] },
    { title: "Core Integration", icon: Code, steps: ["Booking & Guest APIs integrated", "Reservation management flows", "Error handling implemented"] },
    { title: "Webhooks", icon: AlertCircle, steps: ["Webhook endpoint developed", "Event subscriptions configured", "Real-time sync tested"] },
    { title: "Testing", icon: CheckCircle, steps: ["End-to-end integration testing", "Performance validation", "Security audit completed"] },
    { title: "Deployment", icon: Rocket, steps: ["Production environment setup", "Pilot hotel deployment", "Monitoring & alerting live"] }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          Integration Workflow
        </h1>
        <p className="text-lg text-base-content/80">
          How we guide partners like Straiv through a seamless, structured, and supported integration process.
        </p>
      </div>

      {/* Integration Timeline Visual */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-8 text-primary justify-center">
            Typical 8-Week Integration Journey
          </h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {integrationPhases.map((phase, index) => (
              <li key={index}>
                <div className="timeline-middle">
                  <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center">
                    <phase.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-end mb-10`}>
                  <time className="font-mono italic">Phase {index + 1}</time>
                  <div className="text-lg font-black">{phase.title}</div>
                  <ul className="space-y-1 mt-2 text-sm text-base-content/70">
                    {phase.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
                {index < integrationPhases.length - 1 && <hr/>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Integration Architecture */}
      <div className="card bg-base-200/50 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">
            <Code className="w-6 h-6 text-primary mr-2" />
            Core Integration Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
            <div className="p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Straiv PWA Platform</h3>
              <p className="text-sm text-base-content/70">Progressive Web App delivering no-download guest experience and digital journey automation.</p>
            </div>
            <div className="text-primary flex flex-col items-center">
                <p className="font-mono text-sm">API Calls →</p>
                <ArrowRight className="w-12 h-12 my-2" />
                <p className="font-mono text-sm">← Webhooks</p>
            </div>
            <div className="p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Apaleo Platform</h3>
              <p className="text-sm text-base-content/70">Secure, real-time access to hotel PMS data via APIs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* API Requirements */}
      <div className="card bg-base-200/50 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6 text-primary justify-center">
             Required Apaleo APIs for Straiv Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-base-100/50 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" />Reservations API</h3>
              <ul className="space-y-2 text-sm text-base-content/80 mt-2">
                <li>Guest check-in/check-out automation</li>
                <li>Real-time availability and room assignment</li>
                <li>Guest profile and preference management</li>
              </ul>
            </div>
            <div className="p-4 bg-base-100/50 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center"><CheckSquare className="w-5 h-5 mr-2" />Services API</h3>
              <ul className="space-y-2 text-sm text-base-content/80 mt-2">
                <li>Digital upselling and service booking</li>
                <li>Spa, restaurant, and amenity reservations</li>
                <li>Revenue optimization tracking</li>
              </ul>
            </div>
            <div className="p-4 bg-base-100/50 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center"><Server className="w-5 h-5 mr-2" />Webhooks Integration</h3>
              <ul className="space-y-2 text-sm text-base-content/80 mt-2">
                <li>Real-time guest status updates</li>
                <li>Instant notification for service requests</li>
                <li>Automated workflow triggers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Support Framework */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-primary text-center justify-center">
            App Success Manager Support Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">During Integration</h3>
              <ul className="space-y-2 text-sm text-base-content/80">
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Week 1-2: API access setup and authentication testing</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Week 3-4: Core functionality integration (check-in/out, room access)</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Week 5-6: Service booking and upselling features</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Week 7-8: Testing, optimization, and go-live preparation</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Post-Launch Success</h3>
              <ul className="space-y-2 text-sm text-base-content/80">
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Days 1-30: Performance monitoring and optimization</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Month 2-3: Feature enhancement and scaling support</span></li>
                <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" /><span>Ongoing: Partnership development and co-marketing opportunities</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Success Metrics */}
      <div className="card bg-base-200/50 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-primary justify-center">
            <Target className="w-6 h-6 mr-2" />
            Technical Success Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-base-100/50 rounded-lg">
              <h4 className="font-bold">API Response Time</h4>
              <p className="text-sm text-base-content/70 mt-1">&lt;500ms target</p>
            </div>
            <div className="p-4 bg-base-100/50 rounded-lg">
              <h4 className="font-bold">System Reliability</h4>
              <p className="text-sm text-base-content/70 mt-1">99.9%+ uptime</p>
            </div>
            <div className="p-4 bg-base-100/50 rounded-lg">
              <h4 className="font-bold">Data Accuracy</h4>
              <p className="text-sm text-base-content/70 mt-1">Real-time sync verified</p>
            </div>
             <div className="p-4 bg-base-100/50 rounded-lg">
              <h4 className="font-bold">Performance</h4>
              <p className="text-sm text-base-content/70 mt-1">Continuous optimization</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration Advantage Callout */}
      <div className="card bg-primary text-primary-content shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">The Apaleo Integration Advantage</h2>
          <p className="max-w-xl">
            This entire 8-week journey is delivered with a <strong>€0 integration fee</strong>, a stark contrast to competitors who charge thousands and take months to deploy.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
        <div className="card-body p-6">
          <div className="text-center">
            <h2 className="card-title justify-center text-xl">Ready for the Technical Details?</h2>
            <p className="text-base-content/70 mt-1">
              Let's dive into the specific API endpoints and data models required for this integration.
            </p>
          </div>
          <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange(SECTIONS.API_REQUIREMENTS)}
            >
              Next: APIs & Data Requirements <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange(SECTIONS.PARTNER_PROFILE)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Partner Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationWorkflow; 