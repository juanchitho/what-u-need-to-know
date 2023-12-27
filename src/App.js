import './App.css';
import CotiDolarBlue from './components/CotiDolarBlue';
import CotiDolarOfi from './components/CotiDolarOfi';
import CotiDolarCryp from './components/CotiDolarCryp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CotiDolarBlue />
        <CotiDolarOfi /> 
        <CotiDolarCryp />

                   
      </header>
      
      
    </div>
  );
}

export default App;
