import './App.css';
import ParentComponent from './components/Login';
import PasswordStrengthIndicator from './components/PasswordStrength';
import PasswordForm from './components/StrengthMeterParent';


function App() {
  return (
    <div>
      <ParentComponent/>
      <PasswordForm/>
      <PasswordStrengthIndicator/>
    </div>
  );
}

export default App;
