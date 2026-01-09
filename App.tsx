
import React from 'react';
import LoginScreen from './components/LoginScreen';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <LoginScreen />
    </div>
  );
};

export default App;
