import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/Routes';
import Navbar from '../src/Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
     <AllRoutes />
    </div>
  );
}

export default App;
