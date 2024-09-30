import './App.css';
import Filters from './components/Filters';
import { FilterProvider } from './context/FilterContext';

function App() {

  return (
    <FilterProvider>
      <Filters/>
    </FilterProvider>
  );
}

export default App;
