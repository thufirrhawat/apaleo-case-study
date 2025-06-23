import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LogOut, Menu, X, Home, ChevronLeft, ChevronRight, Play, Pause, Square, RotateCcw, Clock, Move } from 'lucide-react';
import { setAuthStatus, getDemoState, saveDemoState } from '../utils/storage';
import { SECTIONS, SECTION_LABELS, SECTION_DESCRIPTIONS, APP_CONFIG } from '../utils/constants';
import nuriPp from '../assets/images/nuri-pp.png';

console.log('Rerendering Layout, imports:', { setAuthStatus, getDemoState, saveDemoState });

// Import section components
import Overview from './sections/Overview';
import Methodology from './sections/Methodology';
import MarketAnalysis from './sections/MarketAnalysis';
import ApaleoAnalysis from './sections/ApaleoAnalysis';
import PartnerProfile from './sections/PartnerProfile';
import IntegrationWorkflow from './sections/IntegrationWorkflow';
import ApiRequirements from './sections/ApiRequirements';
import UseCaseDemo from './sections/UseCaseDemo';
import Sources from './sections/Sources';

const Layout = ({ onLogout }) => {
  const { section } = useParams();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [demoState, setDemoState] = useState(getDemoState());
  
  // Floating timer state
  const [floatingTimerPosition, setFloatingTimerPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const floatingTimerRef = useRef(null);
  
  // Load timer state from session storage
  const loadTimerState = () => {
    try {
      const saved = sessionStorage.getItem('presentationTimer');
      if (saved) {
        const parsed = JSON.parse(saved);
        const now = Date.now();
        const timeDiff = Math.floor((now - (parsed.timestamp || now)) / 1000);
        
        return {
          time: (parsed.time || 0) + (parsed.isRunning ? timeDiff : 0),
          isRunning: parsed.isRunning || false,
          isPaused: parsed.isPaused || false
        };
      }
    } catch (error) {
      console.error('Error loading timer state:', error);
    }
    return { time: 0, isRunning: false, isPaused: false };
  };

  // Save timer state to session storage
  const saveTimerState = (state) => {
    try {
      sessionStorage.setItem('presentationTimer', JSON.stringify({
        time: state.time,
        isRunning: state.isRunning,
        isPaused: state.isPaused,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.error('Error saving timer state:', error);
    }
  };

  // Presentation Timer State
  const [timerState, setTimerState] = useState(loadTimerState());

  // Unified timer effect
  useEffect(() => {
    let interval = null;
    
    // Only run the timer if isRunning is true
    if (timerState.isRunning && !timerState.isPaused) {
      console.log('Timer effect: Starting or resuming interval.');
      interval = setInterval(() => {
        setTimerState(prev => {
          const newTime = prev.time + 1;
          // We only update time here; isRunning state is handled by button clicks
          const newState = { ...prev, time: newTime };
          // Save state on each tick to persist across reloads
          saveTimerState(newState);
          return newState;
        });
      }, 1000);
    } else {
      console.log('Timer effect: Clearing interval.');
      // If not running or paused, do nothing, the interval is already null
    }

    // Cleanup function: this is crucial
    return () => {
      if (interval) {
        console.log('Timer effect: Cleanup - clearing interval.');
        clearInterval(interval);
      }
    };
  }, [timerState.isRunning, timerState.isPaused]); // Rerun effect when running/paused state changes

  // Map URL slugs to section constants
  const urlToSection = {
    'overview': SECTIONS.OVERVIEW,
    'methodology': SECTIONS.METHODOLOGY,
    'market-analysis': SECTIONS.MARKET_ANALYSIS,
    'apaleo-analysis': SECTIONS.APALEO_ANALYSIS,
    'partner-profile': SECTIONS.PARTNER_PROFILE,
    'integration-workflow': SECTIONS.INTEGRATION_WORKFLOW,
    'api-requirements': SECTIONS.API_REQUIREMENTS,
    'use-case-demo': SECTIONS.USE_CASE_DEMO,
    'sources': SECTIONS.SOURCES,
  };

  const sectionToUrl = {
    [SECTIONS.OVERVIEW]: 'overview',
    [SECTIONS.METHODOLOGY]: 'methodology',
    [SECTIONS.MARKET_ANALYSIS]: 'market-analysis',
    [SECTIONS.APALEO_ANALYSIS]: 'apaleo-analysis',
    [SECTIONS.PARTNER_PROFILE]: 'partner-profile',
    [SECTIONS.INTEGRATION_WORKFLOW]: 'integration-workflow',
    [SECTIONS.API_REQUIREMENTS]: 'api-requirements',
    [SECTIONS.USE_CASE_DEMO]: 'use-case-demo',
    [SECTIONS.SOURCES]: 'sources',
  };

  const currentSection = urlToSection[section] || SECTIONS.OVERVIEW;

  useEffect(() => {
    const state = getDemoState();
    setDemoState(state);
    
    // If URL section is invalid, redirect to overview
    if (!urlToSection[section]) {
      navigate('/overview', { replace: true });
    }
    
    // Scroll to top when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [section, navigate]);

  const handleSectionChange = (sectionValue) => {
    const urlSlug = sectionToUrl[sectionValue];
    navigate(`/${urlSlug}`);
    setIsMobileMenuOpen(false);
    
    // Scroll to top immediately when navigation is triggered
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update demo state
    const updatedState = {
      ...demoState,
      currentSection: sectionValue
    };
    setDemoState(updatedState);
    saveDemoState(updatedState);
  };

  const handleLogout = () => {
    setAuthStatus(false);
    onLogout();
  };

  // Presentation Timer Functions
  const startTimer = () => {
    console.log('Starting presentation timer');
    setTimerState(prev => {
      const newState = {
        ...prev,
        isRunning: true,
        isPaused: false,
        // If it was paused, we don't reset the time
        time: prev.isPaused ? prev.time : 0
      };
      saveTimerState(newState);
      return newState;
    });
  };

  const pauseTimer = () => {
    console.log('Pausing presentation timer');
    setTimerState(prev => {
      const newState = { ...prev, isRunning: false, isPaused: true };
      saveTimerState(newState);
      return newState;
    });
  };

  const stopTimer = () => {
    console.log('Stopping presentation timer');
    const newState = { time: 0, isRunning: false, isPaused: false };
    setTimerState(newState);
    saveTimerState(newState);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Floating timer drag handlers
  const handleMouseDown = (e) => {
    if (!floatingTimerRef.current) return;
    
    const rect = floatingTimerRef.current.getBoundingClientRect();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 80;
    
    setFloatingTimerPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add global mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // Track window size for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCurrentSection = () => {
    const sectionProps = { demoState, setDemoState, onSectionChange: handleSectionChange, navigate };
    
    switch (currentSection) {
      case SECTIONS.OVERVIEW:
        return <Overview {...sectionProps} />;
      case SECTIONS.METHODOLOGY:
        return <Methodology {...sectionProps} />;
      case SECTIONS.MARKET_ANALYSIS:
        return <MarketAnalysis {...sectionProps} />;
      case SECTIONS.APALEO_ANALYSIS:
        return <ApaleoAnalysis {...sectionProps} />;
      case SECTIONS.PARTNER_PROFILE:
        return <PartnerProfile {...sectionProps} />;
      case SECTIONS.INTEGRATION_WORKFLOW:
        return <IntegrationWorkflow {...sectionProps} />;
      case SECTIONS.API_REQUIREMENTS:
        return <ApiRequirements {...sectionProps} />;
      case SECTIONS.USE_CASE_DEMO:
        return <UseCaseDemo {...sectionProps} />;
      case SECTIONS.SOURCES:
        return <Sources {...sectionProps} />;
      default:
        return <Overview {...sectionProps} />;
    }
  };

  const sectionEntries = Object.entries(SECTIONS);

  return (
    <div className={`drawer ${!isSidebarCollapsed ? 'lg:drawer-open' : ''}`}>
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" 
             checked={isMobileMenuOpen} 
             onChange={(e) => setIsMobileMenuOpen(e.target.checked)} />
      
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm border-b lg:hidden sticky top-0 z-50">
          <div className="flex-none">
            <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </label>
          </div>
          
          <div className="flex-1">
            <h1 className="text-lg font-bold text-primary">{APP_CONFIG.name}</h1>
          </div>
          
          <div className="flex-none">
            <button 
              className="btn btn-ghost btn-sm"
              onClick={handleLogout}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* Fixed sticky sidebar toggle for collapsed state */}
        {isSidebarCollapsed && (
          <button
            className="fixed top-6 left-6 z-50 btn btn-primary btn-sm shadow-lg hidden lg:flex"
            onClick={() => setIsSidebarCollapsed(false)}
            title="Expand Sidebar"
          >
            <ChevronRight size={18} />
          </button>
        )}

        {/* Main content */}
        <main className="flex-1 p-4 lg:p-6 max-w-full overflow-x-hidden">

          <div className="max-w-7xl mx-auto">
            {/* Section content */}
            <div className="fade-in">
              {renderCurrentSection()}
            </div>
          </div>
        </main>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        
        <aside className="w-80 min-h-full bg-base-200 flex flex-col">
          {/* Sidebar header */}
          <div className="p-4 border-b border-base-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img 
                      src={nuriPp} 
                      alt="Nuri Profile Picture" 
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-primary">{APP_CONFIG.name}</h2>
                  <p className="text-xs text-base-content/60">{APP_CONFIG.author}</p>
                </div>
              </div>
              {/* Desktop collapse button */}
              <button
                className="btn btn-ghost btn-sm hidden lg:flex"
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
              >
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="menu menu-lg w-full">
              {sectionEntries.map(([key, value], index) => {
                const isActive = currentSection === value;
                
                return (
                  <li key={value} className="mb-1">
                    <button
                      onClick={() => handleSectionChange(value)}
                      className={`w-full text-left rounded-lg p-3 font-semibold text-sm transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary text-primary-content shadow-md' 
                          : 'hover:bg-base-300'
                      }`}
                    >
                      {SECTION_LABELS[value]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-base-300">
            <button
              className="btn btn-ghost w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>

          {/* Presentation Timer */}
          <div className="p-4 border-t border-base-300 bg-base-300">
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Presentation Timer</span>
              </div>
              
              {/* Timer Display */}
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-base-content">
                  {formatTime(timerState.time)}
                </div>
                <div className="text-xs text-base-content/60">
                  {timerState.isRunning ? 'Running' : timerState.isPaused ? 'Paused' : 'Ready'}
                </div>
              </div>

              {/* Timer Controls */}
              <div className="flex justify-center gap-2">
                {!timerState.isRunning ? (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={startTimer}
                    title="Start Timer"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={pauseTimer}
                    title="Pause Timer"
                  >
                    <Pause className="w-4 h-4" />
                  </button>
                )}
                
                <button
                  className="btn btn-error btn-sm"
                  onClick={stopTimer}
                  title="Stop Timer"
                  disabled={timerState.time === 0 && !timerState.isRunning}
                >
                  <Square className="w-4 h-4" />
                </button>
                
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={stopTimer}
                  title="Reset Timer"
                  disabled={timerState.time === 0 && !timerState.isRunning}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </aside>
      </div>
      
      {/* Floating Timer - shown when sidebar is collapsed or on mobile */}
      {(isSidebarCollapsed || isMobile) && (
        <div
          ref={floatingTimerRef}
          className="fixed bg-base-200 border border-base-300 rounded-lg shadow-xl p-3 cursor-move z-40 select-none hover:shadow-2xl transition-shadow"
          style={{
            left: `${floatingTimerPosition.x}px`,
            top: `${floatingTimerPosition.y}px`,
            width: '120px'
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1">
              <Clock className="w-3 h-3 text-primary" />
              <Move className="w-3 h-3 text-base-content/50" />
            </div>
            
            {/* Compact Timer Display */}
            <div className="text-center">
              <div className="text-lg font-mono font-bold text-base-content">
                {formatTime(timerState.time)}
              </div>
              <div className="text-xs text-base-content/60">
                {timerState.isRunning ? 'Running' : timerState.isPaused ? 'Paused' : 'Ready'}
              </div>
            </div>

            {/* Compact Timer Controls */}
            <div className="flex justify-center gap-1">
              {!timerState.isRunning ? (
                <button
                  className="btn btn-primary btn-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    startTimer();
                  }}
                  title="Start Timer"
                >
                  <Play className="w-3 h-3" />
                </button>
              ) : (
                <button
                  className="btn btn-warning btn-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    pauseTimer();
                  }}
                  title="Pause Timer"
                >
                  <Pause className="w-3 h-3" />
                </button>
              )}
              
              <button
                className="btn btn-error btn-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  stopTimer();
                }}
                title="Stop Timer"
                disabled={timerState.time === 0 && !timerState.isRunning}
              >
                <Square className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout; 