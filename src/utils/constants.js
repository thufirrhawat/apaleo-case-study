// Application constants and configuration

export const APP_CONFIG = {
  name: 'Apaleo ASM Case Study',
  author: 'by Nurettin Ünal',
  version: '1.0.0',
  description: 'Digital Guest Journey Integration Strategy & Partner Success Framework',
  contact: {
    email: 'nurettin@example.com',
    linkedin: 'linkedin.com/in/nurettin-unal'
  }
};

export const PASSCODE = 'Apaleo<>Nuri2025';

export const SECTIONS = {
  OVERVIEW: 'overview',
  METHODOLOGY: 'methodology',
  MARKET_ANALYSIS: 'market-analysis',
  APALEO_ANALYSIS: 'apaleo-analysis',
  PARTNER_PROFILE: 'partner-profile',
  INTEGRATION_WORKFLOW: 'integration-workflow',
  API_REQUIREMENTS: 'api-requirements',
  USE_CASE_DEMO: 'use-case-demo',
  SOURCES: 'sources'
};

// Journey flow for progress tracking
export const JOURNEY_FLOW = [
  { id: SECTIONS.OVERVIEW, title: 'Overview', step: 0 },
  { id: SECTIONS.METHODOLOGY, title: 'Methodology', step: 1 },
  { id: SECTIONS.MARKET_ANALYSIS, title: 'Market Intelligence', step: 2 },
  { id: SECTIONS.APALEO_ANALYSIS, title: 'Platform Analysis', step: 3 },
  { id: SECTIONS.PARTNER_PROFILE, title: 'Partner Profile', step: 4 },
  { id: SECTIONS.INTEGRATION_WORKFLOW, title: 'Integration Flow', step: 5 },
  { id: SECTIONS.API_REQUIREMENTS, title: 'Technical Specs', step: 6 },
  { id: SECTIONS.USE_CASE_DEMO, title: 'Live Demo', step: 7 },
  { id: SECTIONS.SOURCES, title: 'Research & Next Steps', step: 8 }
];

export const SECTION_LABELS = {
  [SECTIONS.OVERVIEW]: 'Executive Summary',
  [SECTIONS.METHODOLOGY]: 'Research Methodology',
  [SECTIONS.MARKET_ANALYSIS]: 'Market Intelligence',
  [SECTIONS.APALEO_ANALYSIS]: 'Apaleo Competitive Analysis',
  [SECTIONS.PARTNER_PROFILE]: 'Partner Profile & Objectives',
  [SECTIONS.INTEGRATION_WORKFLOW]: 'Integration Workflow',
  [SECTIONS.API_REQUIREMENTS]: 'APIs & Data Requirements',
  [SECTIONS.USE_CASE_DEMO]: 'Sample Use Case Demo',
  [SECTIONS.SOURCES]: 'Research Sources'
};

export const SECTION_DESCRIPTIONS = {
  [SECTIONS.OVERVIEW]: 'Strategic overview and key recommendations for GuestFlow AI integration',
  [SECTIONS.METHODOLOGY]: 'My systematic approach to partner integration analysis',
  [SECTIONS.MARKET_ANALYSIS]: 'Digital Guest Journey market trends and opportunities',
  [SECTIONS.APALEO_ANALYSIS]: 'Apaleo\'s competitive advantages and ecosystem positioning',
  [SECTIONS.PARTNER_PROFILE]: 'GuestFlow AI company profile and integration objectives',
  [SECTIONS.INTEGRATION_WORKFLOW]: 'End-to-end integration workflow from partner perspective',
  [SECTIONS.API_REQUIREMENTS]: 'Key APIs, data requirements, and technical specifications',
  [SECTIONS.USE_CASE_DEMO]: 'Real-life scenario walkthrough of the integration',
  [SECTIONS.SOURCES]: 'Research data and industry sources supporting this analysis'
};

export const DEMO_USERS = {
  GUEST: 'guest',
  STAFF: 'staff',
  MANAGER: 'manager'
};

export const LANGUAGES = {
  EN: 'en',
  DE: 'de',
  ES: 'es',
  FR: 'fr'
};

export const LANGUAGE_LABELS = {
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.DE]: 'Deutsch',
  [LANGUAGES.ES]: 'Español',
  [LANGUAGES.FR]: 'Français'
};

export const THEMES = {
  STRAIV: 'straiv',
  LIGHT: 'light',
  DARK: 'dark',
  CORPORATE: 'corporate'
};

export const API_ENDPOINTS = {
  // Demo endpoints (would be real in production)
  GUESTS: '/api/guests',
  BOOKINGS: '/api/bookings',
  SERVICES: '/api/services',
  ANALYTICS: '/api/analytics',
  NOTIFICATIONS: '/api/notifications'
};

export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  EXTRA_SLOW: 800
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
};

export const COLORS = {
  PRIMARY: '#1e40af',
  SECONDARY: '#06b6d4',
  ACCENT: '#3b82f6',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#0ea5e9'
};

export const FEATURE_FLAGS = {
  VOICE_INTERFACE: true,
  AI_SUGGESTIONS: true,
  REAL_TIME_SYNC: true,
  ANALYTICS_DASHBOARD: true,
  MOBILE_FIRST: true,
  OFFLINE_SUPPORT: true
};

export const DEMO_SCENARIOS = {
  BUSINESS_TRAVELER: 'business_traveler',
  LEISURE_GUEST: 'leisure_guest',
  RETURNING_GUEST: 'returning_guest',
  VIP_GUEST: 'vip_guest'
};

export const SERVICE_CATEGORIES = {
  ACCOMMODATION: 'accommodation',
  DINING: 'dining',
  WELLNESS: 'wellness',
  BUSINESS: 'business',
  ENTERTAINMENT: 'entertainment',
  TRANSPORT: 'transport'
};

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

export const CHART_COLORS = [
  '#1e40af', // Primary
  '#06b6d4', // Secondary
  '#3b82f6', // Accent
  '#10b981', // Success
  '#f59e0b', // Warning
  '#ef4444', // Error
  '#0ea5e9', // Info
  '#8b5cf6', // Purple
  '#f97316', // Orange
  '#84cc16'  // Lime
];

export const COMPETITOR_COLORS = {
  STRAIV: '#1e40af',
  COMPETITOR_A: '#6b7280',
  COMPETITOR_B: '#9ca3af',
  TRADITIONAL: '#d1d5db'
};

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://linkedin.com/in/nurettin-unal',
  GITHUB: 'https://github.com/nurettin',
  WEBSITE: 'https://nurettin.dev'
};

export const CONTACT_INFO = {
  EMAIL: 'nurettin@example.com',
  PHONE: '+49 xxx xxx xxxx',
  LOCATION: 'Munich, Germany'
};

// Debug logging for styling issues
export const debugLog = (component, message, data = {}) => {
  console.log(`🐛 [DEBUG] ${component}:`, message, data);
};

// Debug card styling function
export const debugCardStyling = (cardType, cardElement) => {
  if (cardElement) {
    const computedStyles = window.getComputedStyle(cardElement);
    debugLog('Card Styling', `${cardType} card`, {
      backgroundColor: computedStyles.backgroundColor,
      color: computedStyles.color,
      classes: cardElement.className
    });
  }
}; 