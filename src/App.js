import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Input from './components/Form';

function App() {
  return (
    <div className='flex items-center shadow-md space-x-8 bg-white rounded-md px-10 py-6 mt-10'>
      <Card/>
      <Input/>
    </div>
  );
}

export default App;
