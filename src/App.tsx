import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { theme } from './theme/theme';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import LoginPage from './components/auth/LoginPage';
import SignUpPage from './components/auth/SignUpPage';
import Dashboard from './components/Dashboard';
import FrontendDevelopmentReport from './components/reports/FrontendDevelopmentReport';
import BackendDevelopmentReport from './components/reports/BackendDevelopmentReport';
import FullStackReport from './components/reports/FullStackReport';
import IOSDevelopmentReport from './components/reports/IOSDevelopmentReport';
import AndroidDevelopmentReport from './components/reports/AndroidDevelopmentReport';
import CrossPlatformReport from './components/reports/CrossPlatformReport';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="App">
            <TopBar />
            <Navigation />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/services/web-development/frontend" element={<FrontendDevelopmentReport />} />
              <Route path="/services/web-development/backend" element={<BackendDevelopmentReport />} />
              <Route path="/services/web-development/fullstack" element={<FullStackReport />} />
              <Route path="/services/mobile-development/ios" element={<IOSDevelopmentReport />} />
              <Route path="/services/mobile-development/android" element={<AndroidDevelopmentReport />} />
              <Route path="/services/mobile-development/cross-platform" element={<CrossPlatformReport />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;