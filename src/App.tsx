import { Route, Routes } from 'react-router-dom';
import { RepoDetails } from './pages/RepoDetails';
import { Repos } from './pages/Repos';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Repos />} />
      <Route path='/repos/*' element={<RepoDetails />} />
    </Routes>
  )
}
export default App