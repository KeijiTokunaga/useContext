import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SpinnerOverlay from './components/SpinnerOverlay';
import { LoadingProvider } from './context/LoadingContext';
import { AuthProvider } from './context/AuthContext';
import List from './components/List';

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <Router>
          <SpinnerOverlay />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
      </AuthProvider>
    </LoadingProvider>
  );
};

export default App;
