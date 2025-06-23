// LocalStorage utility functions for demo state management

const STORAGE_KEYS = {
  AUTH_STATUS: 'straiv_auth_status',
  GUEST_DATA: 'straiv_guest_data',
  DEMO_STATE: 'straiv_demo_state',
  USER_PREFERENCES: 'straiv_user_preferences'
};

// Authentication utilities
export const setAuthStatus = (isAuthenticated) => {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH_STATUS, JSON.stringify(isAuthenticated));
  } catch (error) {
    console.warn('Failed to save auth status:', error);
  }
};

export const getAuthStatus = () => {
  try {
    const status = localStorage.getItem(STORAGE_KEYS.AUTH_STATUS);
    return status ? JSON.parse(status) : false;
  } catch (error) {
    console.warn('Failed to get auth status:', error);
    return false;
  }
};

// Guest data utilities
export const saveGuestData = (guestData) => {
  try {
    localStorage.setItem(STORAGE_KEYS.GUEST_DATA, JSON.stringify(guestData));
  } catch (error) {
    console.warn('Failed to save guest data:', error);
  }
};

export const getGuestData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.GUEST_DATA);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn('Failed to get guest data:', error);
    return null;
  }
};

// Demo state utilities
export const saveDemoState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEYS.DEMO_STATE, JSON.stringify(state));
  } catch (error) {
    console.warn('Failed to save demo state:', error);
  }
};

export const getDemoState = () => {
  try {
    const state = localStorage.getItem(STORAGE_KEYS.DEMO_STATE);
    return state ? JSON.parse(state) : {
      currentSection: 'overview',
      interactionHistory: [],
      bookingHistory: [],
      preferences: {}
    };
  } catch (error) {
    console.warn('Failed to get demo state:', error);
    return {
      currentSection: 'overview',
      interactionHistory: [],
      bookingHistory: [],
      preferences: {}
    };
  }
};

// User preferences utilities
export const saveUserPreferences = (preferences) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
  } catch (error) {
    console.warn('Failed to save user preferences:', error);
  }
};

export const getUserPreferences = () => {
  try {
    const prefs = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    return prefs ? JSON.parse(prefs) : {
      theme: 'straiv',
      language: 'en',
      notifications: true,
      autoSave: true
    };
  } catch (error) {
    console.warn('Failed to get user preferences:', error);
    return {
      theme: 'straiv',
      language: 'en',
      notifications: true,
      autoSave: true
    };
  }
};

// Utility to clear all demo data
export const clearDemoData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.warn('Failed to clear demo data:', error);
  }
};

// Utility to check if storage is available
export const isStorageAvailable = () => {
  try {
    const test = 'test';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};

// Utility to get storage usage
export const getStorageUsage = () => {
  try {
    let totalSize = 0;
    const usage = {};
    
    for (const [key, value] of Object.entries(STORAGE_KEYS)) {
      const data = localStorage.getItem(value);
      const size = data ? new Blob([data]).size : 0;
      usage[key] = size;
      totalSize += size;
    }
    
    return {
      total: totalSize,
      breakdown: usage,
      limit: 5 * 1024 * 1024, // 5MB typical limit
      percentage: (totalSize / (5 * 1024 * 1024)) * 100
    };
  } catch (error) {
    console.warn('Failed to get storage usage:', error);
    return { total: 0, breakdown: {}, limit: 0, percentage: 0 };
  }
}; 