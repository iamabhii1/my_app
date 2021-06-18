import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar.css';  
import Body from './components/Body';
import './components/Body.css';
function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Body/>
      </div>
    </>
    
  );
}

export default App;
