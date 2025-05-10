
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to 6Club Game</h1>
      <p>This is a preview version.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
