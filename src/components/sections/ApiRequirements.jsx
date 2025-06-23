import React, { useState } from 'react';
import { 
  Database, KeyRound, Webhook, Shield, Code, CheckCircle, ArrowRight, ChevronLeft, Rocket, Clock, Lightbulb,
  Briefcase, Package, AreaChart, Euro, Smile, UserCheck, Bell, BarChart3, FileText, DatabaseZap, Puzzle,
  BookOpen, Star, Zap, ShieldCheck, ThumbsUp, TrendingUp, X, Check, ExternalLink, GitBranch
} from 'lucide-react';
import { SECTIONS } from '../../utils/constants';

// --- DATA STRUCTURES FOR THE NEW DESIGN ---

const TABS = {
  CORE_OPS: 'Core Operations',
  GUEST_EXP: 'Guest Experience',
  BI: 'Business Intelligence',
  PLATFORM: 'Platform Tools',
  ALL_APIS: 'All APIs'
};

const apiDetails = {
  'GET /booking/v1/reservations/{id}': {
    endpoint: "GET /booking/v1/reservations/{id}",
    purpose: "Retrieve complete guest reservation details for staff and guest applications.",
    businessValue: "Enable instant access to guest context, reducing check-in time by 3-5 minutes and improving guest satisfaction scores by 15-20%.",
    useCases: [
      "Staff mobile apps showing guest preferences and special requests.",
      "Guest self-service portals for reservation management.",
      "Check-in kiosks pulling arrival information for contactless processing.",
      "Customer service tools for instant reservation lookup and issue resolution."
    ],
    integrationExamples: [
      { name: "Straiv PWA", description: "Create no-download guest check-in experience with pre-populated data." },
      { name: "Una AI Agent", description: "Instant reservation access for 99-language guest communication." },
      { name: "Onsai Voice", description: "Automated booking confirmations and modification handling." }
    ],
    technicalDetails: {
      scopes: "reservations.read",
      rateLimit: "1000 calls/hour (Enterprise: unlimited)",
      responseTime: "<200ms average (P95: <500ms)",
      auth: "OAuth 2.0 Bearer token"
    }
  },
  'PUT /booking/v1/reservations/{id}/check-in': {
    endpoint: "PUT /booking/v1/reservations/{id}/check-in",
    purpose: "Process contactless guest arrival with mobile optimization.",
    businessValue: "Eliminate front desk queues, enable instant room access, reduce staff workload by 40%.",
    useCases: [
      "Mobile apps with digital room key generation.",
      "Kiosk check-in systems in hotel lobbies.",
      "Integration with keycard programming systems.",
      "Automated welcome message and service activation."
    ],
    integrationExamples: [
      { name: "Straiv PWA", description: "Enable instant PWA check-in with digital room key generation." },
      { name: "Property management systems", description: "Automated room assignment and key generation." },
      { name: "Guest experience apps", description: "Contactless arrival with immediate service access." }
    ],
    technicalDetails: {
      scopes: "reservations.manage",
      rateLimit: "500 calls/hour",
      responseTime: "<300ms average",
      auth: "OAuth 2.0 Bearer token"
    },
    sideEffects: "Triggers reservation.checked-in webhook, activates in-stay services."
  },
  'POST /booking/v1/service-requests': {
    endpoint: "POST /booking/v1/service-requests",
    purpose: "Submit guest service requests directly from digital touchpoints.",
    businessValue: "Streamline service delivery, improve guest satisfaction scores, reduce front desk calls by 60%.",
    useCases: [
      "In-room tablet ordering for housekeeping, room service, spa bookings.",
      "Mobile app for concierge requests and local recommendations.",
      "Voice assistant integrations for hands-free service requests.",
      "Staff notification systems for immediate request routing."
    ],
    integrationExamples: [
        { name: "Straiv PWA", description: "Enable seamless in-app service ordering (room service, spa, housekeeping)." },
        { name: "Una AI Agent", description: "Process natural language service requests in 99 languages." },
        { name: "Hotel staff apps", description: "Real-time request notifications and status updates." }
    ],
    technicalDetails: {
      scopes: "services.manage",
      rateLimit: "2000 calls/hour",
      responseTime: "<250ms average",
      auth: "OAuth 2.0 Bearer token"
    },
    sideEffects: "Triggers service.requested webhook, creates staff notifications."
  }
};

const coreOpsCategories = [
  {
    name: "Booking & Reservations",
    icon: Briefcase,
    description: "Complete guest journey management from booking to checkout.",
    capabilities: ["Check-in/out automation", "Modification handling", "Guest profile management"],
    endpointCount: 12,
    primaryEndpoints: ["GET /booking/v1/reservations/{id}", "PUT /booking/v1/reservations/{id}/check-in", "PATCH /booking/v1/reservations/{id}"]
  },
  {
    name: "Inventory Management",
    icon: Package,
    description: "Real-time availability, pricing, and property configuration.",
    capabilities: ["Unit management", "Rate plans", "Availability controls"],
    endpointCount: 8,
    primaryEndpoints: ["GET /inventory/v1/properties", "PUT /inventory/v1/rate-plans", "GET /inventory/v1/units"]
  },
  {
    name: "Distribution & Channels",
    icon: AreaChart,
    description: "Multi-channel rate and availability synchronization.",
    capabilities: ["OTA connectivity", "Booking import", "Revenue management integration"],
    endpointCount: 6,
    primaryEndpoints: ["POST /distribution/v1/subscriptions", "GET /distribution/v1/ari-data"]
  },
  {
    name: "Finance & Accounting",
    icon: Euro,
    description: "Automated billing, invoicing, and transaction management.",
    capabilities: ["Folio management", "Payment processing", "Financial reporting"],
    endpointCount: 10,
    primaryEndpoints: ["GET /finance/v1/folios", "POST /finance/v1/charges", "GET /finance/v1/invoices"]
  }
];

const quickStartPaths = [
    { title: "I'm building a Property Management System", details: "Booking + Inventory APIs (4 weeks)" },
    { title: "I'm building a Channel Manager", details: "Distribution + Rates APIs (3 weeks)" },
    { title: "I'm building a Payment Solution", details: "Finance + Apaleo Pay APIs (2 weeks)" },
    { title: "I'm building a Guest Mobile App", details: "Guest Experience APIs (1-2 weeks)" },
];

const guestExpCategories = [
    { name: "Digital Services", icon: Zap, description: "Service requests, upselling, guest communication" },
    { name: "Identity & Profiles", icon: UserCheck, description: "Guest authentication, preference management" },
    { name: "Real-time Updates", icon: Bell, description: "Webhook subscriptions for instant notifications" },
];

const biCategories = [
    { name: "Finance APIs", icon: Euro, description: "Transaction data, revenue reporting, accounting integration" },
    { name: "Rendering APIs", icon: FileText, description: "Invoice generation, document customization" },
    { name: "Analytics Integration", icon: DatabaseZap, description: "Data extraction for business intelligence platforms" },
];

const platformCategories = [
    { name: "Identity & Authentication", icon: KeyRound, description: "OAuth 2.0, user management, security" },
    { name: "Webhooks & Notifications", icon: Webhook, description: "Real-time event subscriptions" },
    { name: "Integration APIs", icon: Puzzle, description: "UI integration, Apaleo One embedding" },
];

const partnerSuccessStories = [
    { quote: "Reduced integration time from 6 months to 3 weeks.", author: "Major Hotel Chain CTO" },
    { quote: "Increased direct bookings by 35% with seamless mobile experience.", author: "Boutique Hotel Group" },
    { quote: "Automated 80% of service requests, freeing staff for guest interaction.", author: "Resort Manager" },
];

const competitiveAdvantages = [
    { icon: Rocket, title: "MACH Architecture", description: "The only true MACH platform in hospitality." },
    { icon: ShieldCheck, title: "99.9999% Uptime SLA", description: "With financial penalties for peace of mind." },
    { icon: ThumbsUp, title: "Zero Integration Fees", description: "Competitors charge $10k-50k upfront." },
    { icon: TrendingUp, title: "P95 Latency <500ms", description: "3x faster than the industry average." },
];

// --- SUB-COMPONENTS ---

const ApiDetailModal = ({ api, onClose }) => {
  if (!api) return null;

  return (
    <div className="modal modal-open" onClick={onClose}>
      <div className="modal-box w-11/12 max-w-4xl" onClick={e => e.stopPropagation()}>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}><X size={20} /></button>
        <h3 className="font-bold text-lg font-mono text-primary">{api.endpoint}</h3>
        <p className="py-4 text-base-content/80">{api.purpose}</p>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-base">Business Value</h4>
            <p className="text-sm text-base-content/70">{api.businessValue}</p>
          </div>
          <div>
            <h4 className="font-semibold text-base">Real-World Use Cases</h4>
            <ul className="list-disc list-inside text-sm text-base-content/70 space-y-1 mt-1">
              {api.useCases.map((uc, i) => <li key={i}>{uc}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base">Integration Examples</h4>
             <div className="space-y-2 mt-1">
              {api.integrationExamples.map((ex, i) => (
                <div key={i} className="p-2 rounded-md bg-base-200/50">
                    <p className="text-sm font-semibold">{ex.name}</p>
                    <p className="text-xs text-base-content/60">{ex.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-base">Technical Details</h4>
            <div className="text-sm font-mono bg-base-200/50 p-3 rounded-md mt-1 space-y-1">
              <p><span className="text-primary/80">Scopes:</span> {api.technicalDetails.scopes}</p>
              <p><span className="text-primary/80">Rate Limit:</span> {api.technicalDetails.rateLimit}</p>
              <p><span className="text-primary/80">Response Time:</span> {api.technicalDetails.responseTime}</p>
              <p><span className="text-primary/80">Authentication:</span> {api.technicalDetails.auth}</p>
            </div>
          </div>
          {api.sideEffects && (
            <div>
              <h4 className="font-semibold text-base">Side Effects</h4>
              <p className="text-sm text-base-content/70">{api.sideEffects}</p>
            </div>
          )}
        </div>
        <div className="modal-action">
          <button className="btn btn-primary">View Full Documentation <ExternalLink size={16} className="ml-2" /></button>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};


const TabContentWrapper = ({ title, subtitle, context, valueProp, children }) => (
  <div className="p-4 sm:p-6 space-y-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-base-content/70 mt-2">{subtitle}</p>
          {context && <div className="mt-4 text-sm badge badge-outline badge-lg">{context}</div>}
          {valueProp && <p className="mt-3 text-lg font-semibold text-primary">{valueProp}</p>}
      </div>
      {children}
  </div>
);


const CoreOperationsTab = ({ onApiClick }) => (
    <TabContentWrapper
        title="Core Operations APIs"
        subtitle="Essential APIs for daily hotel management and operational excellence."
        context="Perfect for: Property Management Systems, Channel Managers, Booking Engines"
    >
        <div className="grid md:grid-cols-2 gap-6">
            {coreOpsCategories.map(cat => (
                <div key={cat.name} className="card bg-base-200 shadow-md border border-base-300/50">
                    <div className="card-body">
                        <h3 className="card-title"><cat.icon className="w-6 h-6 mr-2 text-primary" />{cat.name}</h3>
                        <p className="text-sm text-base-content/70 flex-grow">{cat.description}</p>
                        <div className="my-2">
                           <p className="text-xs font-semibold mb-1">Key Capabilities:</p>
                           <div className="flex flex-wrap gap-1">
                               {cat.capabilities.map(cap => <div key={cap} className="badge badge-neutral badge-sm">{cap}</div>)}
                           </div>
                        </div>
                         <div className="divider my-1"></div>
                        <p className="text-xs font-semibold mb-1">Primary Endpoints ({cat.endpointCount} total):</p>
                        <div className="space-y-1">
                          {cat.primaryEndpoints.map(ep => (
                            <button key={ep} onClick={() => onApiClick(ep)} className="font-mono text-xs w-full text-left p-1 rounded hover:bg-base-300/50 transition-colors">
                              {apiDetails[ep] ? <Check size={12} className="inline mr-2 text-success" /> : <GitBranch size={12} className="inline mr-2 text-base-content/40" /> }
                              {ep}
                            </button>
                          ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="card bg-base-200 shadow-md border border-base-300/50 mt-8">
            <div className="card-body">
                <h3 className="card-title justify-center"><Rocket className="w-6 h-6 mr-2 text-primary"/>Quick Start Paths</h3>
                <p className="text-center text-sm text-base-content/70 mb-4">Follow these paths to get started with common integration types.</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {quickStartPaths.map(path => (
                        <div key={path.title} className="p-4 bg-base-100/50 rounded-lg text-center border border-base-300/30">
                            <p className="font-semibold text-sm">{path.title}</p>
                            <p className="text-xs text-primary mt-1">{path.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </TabContentWrapper>
);

const ApiCategoryCard = ({ category }) => (
    <div className="card bg-base-200 shadow-md border border-base-300/50">
        <div className="card-body items-center text-center">
            <category.icon className="w-10 h-10 mb-2 text-primary" />
            <h3 className="card-title">{category.name}</h3>
            <p className="text-sm text-base-content/70">{category.description}</p>
        </div>
    </div>
);

const GuestExperienceTab = () => (
    <TabContentWrapper
        title="Guest Experience APIs"
        subtitle="Create unforgettable guest journeys from booking to checkout."
        context="Perfect for: Mobile apps, digital concierge services, upselling platforms"
        valueProp="Drive 15-25% ancillary revenue increase with intelligent guest engagement"
    >
        <div className="grid md:grid-cols-3 gap-6">
            {guestExpCategories.map(cat => <ApiCategoryCard key={cat.name} category={cat} />)}
        </div>
    </TabContentWrapper>
);

const BusinessIntelligenceTab = () => (
    <TabContentWrapper
        title="Business Intelligence APIs"
        subtitle="Transform operations with data-driven insights and powerful analytics."
        context="Perfect for: BI dashboards, revenue management tools, automated reporting"
        valueProp="Hotels see 20-30% revenue optimization with proper analytics integration"
    >
        <div className="grid md:grid-cols-3 gap-6">
            {biCategories.map(cat => <ApiCategoryCard key={cat.name} category={cat} />)}
        </div>
    </TabContentWrapper>
);

const PlatformToolsTab = () => (
    <TabContentWrapper
        title="Platform Tools & Infrastructure"
        subtitle="Authentication, webhooks, and system integration utilities for robust applications."
        context="Technical foundation for all Apaleo integrations"
    >
        <div className="grid md:grid-cols-3 gap-6">
            {platformCategories.map(cat => <ApiCategoryCard key={cat.name} category={cat} />)}
        </div>
    </TabContentWrapper>
);


const AllApisTab = () => (
     <TabContentWrapper
        title="Complete API Reference"
        subtitle="Explore a complete, searchable directory of all Apaleo APIs on our official developer portal."
    >
       <div className="text-center p-10 bg-base-200 rounded-lg">
           <BookOpen className="w-16 h-16 mx-auto text-primary/50"/>
           <p className="mt-4 text-lg font-semibold">Explore the Full Documentation</p>
           <p className="text-base-content/60 max-w-md mx-auto mt-2">
               Our developer portal provides an interactive and searchable list of all available API endpoints, guides, and resources.
           </p>
            <a 
              href="https://apaleo.dev/index.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-wide mt-6"
            >
              Go to Apaleo.dev <ExternalLink size={16} className="ml-2" />
            </a>
       </div>
    </TabContentWrapper>
);

const ApiRequirements = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState(TABS.CORE_OPS);
  const [selectedApi, setSelectedApi] = useState(null);

  const handleTabClick = (tab) => {
    console.log(`Tab changed to: ${tab}`);
    setActiveTab(tab);
  };

  const handleApiClick = (endpoint) => {
    const apiData = apiDetails[endpoint];
    if (apiData) {
      console.log(`Displaying details for: ${endpoint}`);
      setSelectedApi(apiData);
    } else {
      console.warn(`No details found for endpoint: ${endpoint}`);
      // Optionally, show a notification to the user
    }
  };

  const handleCloseModal = () => {
    console.log("Closing API detail modal.");
    setSelectedApi(null);
  };
  
  const renderTabContent = () => {
    switch(activeTab) {
      case TABS.CORE_OPS:
        return <CoreOperationsTab onApiClick={handleApiClick} />;
      case TABS.GUEST_EXP:
        return <GuestExperienceTab />;
      case TABS.BI:
        return <BusinessIntelligenceTab />;
      case TABS.PLATFORM:
        return <PlatformToolsTab />;
      case TABS.ALL_APIS:
          return <AllApisTab />;
      default:
        return null;
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      <ApiDetailModal api={selectedApi} onClose={handleCloseModal} />

      {/* Header */}
      <div className="text-center space-y-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          Apaleo Developer Platform
        </h1>
        <p className="text-lg md:text-xl text-base-content/80">
          The only true MACH architecture platform trusted by 1,700+ properties worldwide.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-base-content/70 pt-2">
            <span><span className="font-semibold text-success">99.9999%</span> uptime SLA</span>
            <span className="hidden sm:inline">|</span>
            <span><span className="font-semibold text-success">Days not months</span> implementation</span>
            <span className="hidden sm:inline">|</span>
            <span><span className="font-semibold text-success">Zero</span> integration fees</span>
             <span className="hidden sm:inline">|</span>
            <span><span className="font-semibold text-success">No</span> vendor lock-in</span>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="tabs tabs-boxed justify-center">
        {Object.values(TABS).map(tab => (
          <a
            key={tab}
            className={`tab tab-lg ${activeTab === tab ? "tab-active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </a>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="bg-base-100 rounded-box shadow-xl border border-base-300/30 min-h-[500px]">
          {renderTabContent()}
      </div>

      {/* Partner Success Stories */}
      <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Partner Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
              {partnerSuccessStories.map(story => (
                  <div key={story.author} className="card bg-base-200 border border-base-300/50 shadow-xl">
                      <div className="card-body">
                          <p className="italic">"{story.quote}"</p>
                          <p className="text-right font-semibold text-sm text-primary mt-2">- {story.author}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>

       {/* Competitive Advantages */}
      <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">The Apaleo Advantage</h2>
           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {competitiveAdvantages.map(adv => (
                     <div key={adv.title} className="p-4">
                        <adv.icon className="w-10 h-10 mx-auto text-primary"/>
                        <h3 className="text-lg font-semibold mt-2">{adv.title}</h3>
                        <p className="text-sm text-base-content/70">{adv.description}</p>
                    </div>
                ))}
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