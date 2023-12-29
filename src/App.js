import './App.css';
import CotiDolarBlue from './components/CotiDolarBlue';
import CotiDolarOfi from './components/CotiDolarOfi';
import CotiDolarCryp from './components/CotiDolarCryp';
import ProximoFeriado from './components/ProximoFeriado';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CotiDolarBlue />
        <CotiDolarOfi /> 
        <CotiDolarCryp />
      
                   
      </header>
        <ProximoFeriado />
      
      
    </div>
  );
}

export default App;
