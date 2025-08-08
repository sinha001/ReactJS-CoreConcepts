import UseEffectConcept from './pages/concepts/use-effect';
import UseRefConcept from './pages/concepts/use-ref';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import LearnPage from './pages/LearnPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/learn' element={<LearnPage/>}/>
      <Route path='/concept/use-ref' element={<UseRefConcept />} />
      <Route path='/concept/use-effect' element={<UseEffectConcept />} />
    </Routes>
  );
}
export default App;
