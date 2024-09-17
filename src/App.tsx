// App.tsx
import React from 'react';
import Sidebar from './component/Sidebar';

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Content</h1>
        <p></p>
      </div>
    </div>
  );
};

export default App;