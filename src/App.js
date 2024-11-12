import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Input from './components/Form';
import { useState } from 'react';

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cVVNumber, setCVVNumber] = useState("");
  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  
  return (
    <div className='flex items-center shadow-md space-x-8 bg-white rounded-md px-10 py-6 mt-10'>
    <Input onCardNumberChange={setCardNumber} onCVVNumberChange={setCVVNumber} onNameChange={setName} 
    onExpiryDateChange={setExpiryDate} />
    <Card cardNumber={cardNumber} cVVNumber={cVVNumber} name={name} expiryDate={expiryDate} />
    </div>
  );
}

export default App;
