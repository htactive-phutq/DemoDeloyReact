import React, { lazy, Suspense } from 'react';
import './App.css';

const CodeSplitting = lazy(() => import('./codeSplitting'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1 >Vui lòng đợi...</h1>}>
        <CodeSplitting />
      </Suspense>
    </div>
  );
}

export default App;
