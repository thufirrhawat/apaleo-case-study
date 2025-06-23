import React from 'react';
import { User, Smartphone, Bell, CheckCircle, Star, MessageSquare, ArrowRight, ChevronLeft } from 'lucide-react';
import { SECTIONS } from '../../utils/constants';

const UseCaseDemo = ({ onSectionChange }) => {
  const scenario = [
    { actor: "Guest (Emma)", time: "3 Days Pre-Arrival", title: "Books a Premium Suite", apaleo: "Booking API", straiv: "Creates personalized PWA journey", icon: User },
    { actor: "Straiv PWA", time: "24 Hours Pre-Arrival", title: "Sends Pre-Arrival Offer", apaleo: "Guest & Booking APIs", straiv: "Sends smart welcome with upgrade offer", icon: MessageSquare },
    { actor: "Guest (Emma)", time: "Arrival Day, 2 PM", title: "Performs Contactless Check-in", apaleo: "Reservations API", straiv: "Processes check-in, sends digital key", icon: Smartphone },
    { actor: "Guest (Emma)", time: "Evening, 7 PM", title: "Makes In-App Service Request", apaleo: "Services API", straiv: "Routes request to staff, tracks status", icon: Bell },
    { actor: "System", time: "Checkout, 11 AM", title: "Automates Checkout & Feedback", apaleo: "Billing API", straiv: "Processes payment, sends survey", icon: CheckCircle },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-base-content to-primary pb-3">
          Use Case Demo
        </h1>
        <p className="text-lg text-base-content/80">
          A step-by-step look at how Straiv and Apaleo create a seamless experience for Emma, the guest.
        </p>
      </div>

      {/* Timeline Demo */}
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-8 text-primary justify-center">The Guest Journey Timeline</h2>
          <ul className="timeline max-md:timeline-compact timeline-vertical">
            {scenario.map((step, index) => (
              <li key={index}>
                <div className="timeline-start md:text-end">
                  {index % 2 === 0 ? (
                    <div className="p-1">
                      <time className="text-sm font-mono italic text-base-content/70">{step.time}</time>
                      <div className="text-lg font-extrabold">{step.actor}</div>
                    </div>
                  ) : <div className="p-1">&nbsp;</div>}
                </div>
                <div className="timeline-middle">
                  <div className="p-2 bg-primary rounded-full text-primary-content shadow-lg">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className={`timeline-end mb-10 ${index % 2 !== 0 ? 'md:text-end' : ''}`}>
                  {index % 2 !== 0 ? (
                    <div className="p-1">
                      <time className="text-sm font-mono italic text-base-content/70">{step.time}</time>
                      <div className="text-lg font-extrabold">{step.actor}</div>
                    </div>
                  ) : (
                    <div className="timeline-box card bg-base-100 border border-base-300/50 shadow-sm">
                      <div className="card-body p-4">
                        <h3 className="card-title text-base font-bold">{step.title}</h3>
                        <div className="space-y-2 text-xs mt-2 pt-2 border-t border-base-content/10">
                          <p><span className="font-semibold text-primary">Apaleo Action:</span> {step.apaleo}</p>
                          <p><span className="font-semibold text-primary">Straiv PWA Action:</span> {step.straiv}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {index % 2 === 0 && <div className="p-1">&nbsp;</div>}
                  {index % 2 !== 0 && (
                     <div className="timeline-box card bg-base-100 border border-base-300/50 shadow-sm">
                      <div className="card-body p-4">
                        <h3 className="card-title text-base font-bold">{step.title}</h3>
                        <div className="space-y-2 text-xs mt-2 pt-2 border-t border-base-content/10">
                          <p><span className="font-semibold text-primary">Apaleo Action:</span> {step.apaleo}</p>
                          <p><span className="font-semibold text-primary">Straiv PWA Action:</span> {step.straiv}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {index < scenario.length - 1 && <hr className="bg-primary/20"/>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Results & Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-200/50 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4"><Star className="text-primary mr-2"/>Measurable Impact</h2>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div><div className="text-3xl font-bold text-primary">98.89%</div><div className="text-sm text-base-content/70">Guest Satisfaction</div></div>
              <div><div className="text-3xl font-bold text-primary">3-5 min</div><div className="text-sm text-base-content/70">Check-in Time</div></div>
              <div><div className="text-3xl font-bold text-primary">-70%</div><div className="text-sm text-base-content/70">Routine Inquiries</div></div>
              <div><div className="text-3xl font-bold text-primary">+5-10%</div><div className="text-sm text-base-content/70">Additional Revenue</div></div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200/50 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4"><CheckCircle className="text-primary mr-2"/>Key Benefits</h2>
            <ul className="space-y-2 text-sm text-base-content/80">
              <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0"/><span><span className="font-semibold">For Hotel Staff:</span> More time for high-value guest interactions through PWA automation.</span></li>
              <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0"/><span><span className="font-semibold">For Management:</span> Detailed analytics, increased revenue, improved efficiency through no-download solution.</span></li>
              <li className="flex items-start"><ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0"/><span><span className="font-semibold">For Guests:</span> Personalized, seamless, modern hotel experience without app downloads.</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-base-200 mx-auto shadow-xl border border-base-300">
        <div className="card-body p-6 text-center">
            <h2 className="card-title justify-center text-2xl">Journey Complete!</h2>
            <p className="text-base-content/70 mt-1 max-w-2xl mx-auto">
              You've seen the full App Success Manager lifecycle: from market analysis to real-world impact. This is how strategic guidance and technical expertise create mutual value.
            </p>
          <div className="card-actions justify-center mt-6 grid sm:grid-cols-2 gap-4 w-full">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange(SECTIONS.SOURCES)}
            >
              View Research & Sources <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange(SECTIONS.OVERVIEW)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseDemo; 