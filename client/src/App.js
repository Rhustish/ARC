import {HashRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <ChakraProvider>
        <AlertProvider>
          <Router>
            <AllRoutes/>
          </Router>
          <Alert />
        </AlertProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
