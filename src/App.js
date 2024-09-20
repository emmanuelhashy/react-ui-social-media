import './App.css';
import LoadSpinnerCard from './components';

function App() {
  return (
    <div className="app flex flex-col space-y-4 items-center bg-[#F7DCB9] justify-center h-screen">
      <h1 className='text-2xl text-medium'>Load Spinners</h1>
      <LoadSpinnerCard/>
    </div>
  );
}

export default App;
