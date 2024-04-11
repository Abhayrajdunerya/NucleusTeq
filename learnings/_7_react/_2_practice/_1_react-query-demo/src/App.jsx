import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SuperHeros from "./pages/SuperHeros";
import SuperHero from './pages/SuperHero';
import ParallelQueryPage from './pages/ParallelQueryPage';
import DynamicParallel from './pages/DynamicParallel';
import DependentQueries from './pages/DependentQueries';
import PaginatedQueries from './pages/PaginatedQueries';
import InfiniteQueries from './pages/InfiniteQueries';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/super-heros' element={<SuperHeros />} />
      <Route path='/super-heros/:heroId' element={<SuperHero />} />
      <Route path='/rq-parallel' element={<ParallelQueryPage />} />
      <Route path='/rq-dynamic-parallel' element={<DynamicParallel heroIds={[1, 3]} />} />
      <Route path='/rq-dependent-queries' element={<DependentQueries email={'abhay@gmail.com'} />} />
      <Route path='/rq-pagination' element={<PaginatedQueries />} />
      <Route path='/rq-infinite-queries' element={<InfiniteQueries />} />
    </Routes>
  )
}

export default App