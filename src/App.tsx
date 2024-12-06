import React from 'react';
import Header from './components/Header';
import DealGrid from './components/DealGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DealGrid />
      </main>
    </div>
  );
}

export default App;