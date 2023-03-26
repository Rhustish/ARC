import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;