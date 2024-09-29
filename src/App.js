import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-[#073e77] bg-cover bg-no-repeat bg-[url('bg.svg')] h-screen font-euclid text-white">
      <Sidebar />
    </div>
  );
}

export default App;
