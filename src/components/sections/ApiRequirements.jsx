import React, { useState } from 'react';
import { Database, Key, Webhook, Shield, Code, CheckCircle, AlertCircle, ArrowRight, ChevronLeft, Rocket, Clock, Lightbulb } from 'lucide-react';
import { SECTIONS } from '../../utils/constants';

const ApiRequirements = ({ onSectionChange }) => {
  const apiCategories = [
    { name: "Bookings / Reservations", icon: Database, apis: [
      { endpoint: "GET /booking/v1/reservations/{id}", purpose: "Retrieve booking info for guest profile creation.", use: "Create no-download guest check-in experience and pre-arrival automation." },
      { endpoint: "PUT /booking/v1/reservations/{id}/check-in", purpose: "Process contactless check-in via mobile.", use: "Enable instant PWA check-in with digital room key generation." },
      { endpoint: "PATCH /booking/v1/reservations/{id}", purpose: "Modify reservation details, add-ons, or special requests.", use: "Allow guests to manage their booking directly via the PWA." },
    ]},
    { name: "Services", icon: CheckCircle, apis: [
      { endpoint: "POST /booking/v1/service-requests", purpose: "Submit guest service requests from the app.", use: "Enable seamless in-app service ordering (e.g., room service, spa)." },
      { endpoint: "GET /booking/v1/services/available", purpose: "Show available hotel services for upsell opportunities.", use: "Power intelligent service discovery and revenue optimization." },
      { endpoint: "PUT /booking/v1/service-requests/{id}/status", purpose: "Track service request completion status.", use: "Provide real-time service status updates to guests in the PWA." },
    ]}
  ];
  
  const [selectedCategory, setSelectedCategory] = useState(apiCategories[0]);

  const webhooks = [
    { event: "reservation.checked-in", action: "Activate in-stay services and room controls." },
    { event: "reservation.checked-out", action: "Trigger post-stay feedback and loyalty workflows." },
    { event: "service.requested", action: "Route to appropriate hotel staff and notify guest." },
    { event: "booking.created", action: "Initialize guest profile and begin pre-arrival engagement." }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          APIs & Data Requirements
        </h1>
        <p className="text-lg text-base-content/80">
          The key API endpoints and data flows required to power the Straiv PWA integration with Apaleo.
        </p>
      </div>

      {/* API Categories & Details */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <div className="tabs tabs-boxed justify-center mb-6">
            {apiCategories.map((category) => (
              <a 
                key={category.name}
                className={`tab tab-lg ${selectedCategory.name === category.name ? 'tab-active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <category.icon className="w-5 h-5 mr-2" /> {category.name}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            {selectedCategory.apis.map((api, index) => (
              <div key={index} className="card bg-base-100/50 border border-base-300/50 p-4">
                <div className="font-mono text-sm text-primary mb-2">{api.endpoint}</div>
                <p className="text-sm mb-1"><span className="font-semibold">Purpose:</span> {api.purpose}</p>
                <p className="text-sm text-base-content/80"><span className="font-semibold">Straiv PWA Usage:</span> {api.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Webhook Requirements */}
      <div className="card bg-base-200/50 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 justify-center">
            <Webhook className="w-6 h-6 text-primary mr-2" />
            Real-time Webhook Subscriptions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {webhooks.map((hook, index) => (
              <div key={index} className="p-4 rounded-lg bg-base-100/50 border border-base-300/50">
                <div className="font-mono text-sm text-primary mb-2">{hook.event}</div>
                <p className="text-sm text-base-content/80">{hook.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Straiv-Specific Integration Benefits */}
      <div className="card bg-primary text-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 justify-center">
            <Lightbulb className="w-6 h-6 mr-2" />
            Straiv-Specific Integration Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Rocket className="w-8 h-8" />
              <h3 className="font-semibold">PWA Optimization</h3>
              <p className="text-sm opacity-80">Real-time API responses ensure instant guest experience without app download delays.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8" />
              <h3 className="font-semibold">European Compliance</h3>
              <p className="text-sm opacity-80">GDPR-ready data handling for Straiv's 29-country operations.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8" />
              <h3 className="font-semibold">Operational Efficiency</h3>
              <p className="text-sm opacity-80">3-5 minute check-in time savings through streamlined API workflows.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
        <div className="card-body p-6">
          <div className="text-center">
            <h2 className="card-title justify-center text-xl">Ready for a Live Demo?</h2>
            <p className="text-base-content/70 mt-1">
              See the end result: a live demonstration of the Straiv integration in action.
            </p>
          </div>
          <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange(SECTIONS.USE_CASE_DEMO)}
            >
              Final Step: See The Demo <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange(SECTIONS.INTEGRATION_WORKFLOW)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Workflow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiRequirements; 