import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PasscodeGate from './components/PasscodeGate';
import Layout from './components/Layout';
import Overview from './components/sections/Overview';
import Methodology from './components/sections/Methodology';
import MarketAnalysis from './components/sections/MarketAnalysis';
import ApaleoAnalysis from './components/sections/ApaleoAnalysis';
import PartnerProfile from './components/sections/PartnerProfile';
import IntegrationWorkflow from './components/sections/IntegrationWorkflow';
import ApiRequirements from './components/sections/ApiRequirements';
import UseCaseDemo from './components/sections/UseCaseDemo';
import Sources from './components/sections/Sources';

import { SECTIONS } from './utils/constants';
import { getAuthStatus, setAuthStatus } from './utils/storage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(getAuthStatus());

  const handleLogin = () => {
    setAuthStatus(true);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthStatus(false);
    setIsAuthenticated(false);
  };

  return (
    <>
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<PasscodeGate onSuccess={handleLogin} />} />
        ) : (
          <>
            <Route path="/:section" element={<Layout onLogout={handleLogout} />} />
            <Route path="*" element={<Navigate to="/overview" replace />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
