import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { setAuthStatus } from '../utils/storage';
import { PASSCODE, APP_CONFIG } from '../utils/constants';
import nuriPp from '../assets/images/nuri-pp.png';
import apaleoLogo from '../assets/images/apaleo-logo.png';
import toast from 'react-hot-toast';

const PasscodeGate = ({ onSuccess }) => {
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePasscodeChange = (value) => {
    setPasscode(value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passcode) {
      setError('Please enter a passcode.');
      return;
    }

    if (passcode === PASSCODE) {
      setIsLoading(true);
      
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast.success('Welcome to the Apaleo Case Study! 🎉', {
        duration: 2000,
        position: 'top-center',
        style: {
          background: '#10b981',
          color: '#fff',
        },
      });
      
      setAuthStatus(true);
      
      setTimeout(() => {
        onSuccess();
      }, 500);
    } else {
      setError('Invalid passcode. Please try again.');
      toast.error('Authentication failed. Check the passcode.');
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center py-12 px-8">
          
          {/* Header with two avatars */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Straiv Logo Avatar */}
            <div className="avatar">
              <div className="w-20 h-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 bg-neutral flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-full">
                  <img 
                    src={apaleoLogo} 
                    alt="Apaleo Logo" 
                    className="object-contain block"
                    style={{ width: '50px', height: '12px' }}
                  />
                </div>
              </div>
            </div>
            
            {/* Diamond separator */}
            <div className="text-2xl font-bold text-base-content opacity-60">
              ◊
            </div>
            
            {/* Nuri Avatar */}
            <div className="avatar">
              <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img 
                  src={nuriPp} 
                  alt="Nuri Profile Picture" 
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-base-content mb-3">
            App Success Manager Case Study for Apaleo
          </h1>
          <h2 className="text-base-content/70 mb-8 text-lg">
            Enter passcode to access the case study
          </h2>

          {/* Form */}
          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter passcode..."
                  className={`input input-bordered input-lg w-full pr-12 ${error ? 'input-error' : ''}`}
                  value={passcode}
                  onChange={(e) => handlePasscodeChange(e.target.value)}
                  disabled={isLoading}
                  autoFocus
                />
                <button
                  type="button"
                  className="btn btn-ghost btn-sm absolute top-1/2 right-2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="form-control">
              <button
                type="submit"
                className={`btn btn-primary btn-lg w-full ${isLoading ? 'btn-disabled' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Verifying...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2" size={18} />
                    Access Study
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Development hint (hidden in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 max-w-xs">
          <div className="alert alert-info shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-bold text-sm">Development Mode</h3>
              <div className="text-xs opacity-80">
                Passcode: <code className="bg-base-200 px-1 rounded">{PASSCODE}</code>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasscodeGate; 