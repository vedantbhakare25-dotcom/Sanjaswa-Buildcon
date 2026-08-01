import { useState } from 'react';
import IntroSequence from './components/animations/IntroSequence';
import Home from './pages/Home';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  if (!introComplete) {
    return (
      <IntroSequence
        onComplete={() => setIntroComplete(true)}
      />
    );
  }

  return <Home introComplete />;
}

export default App;