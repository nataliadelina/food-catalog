import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoutesNav from './RoutesNav';
import './style/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesNav />
    </BrowserRouter>
  );
}

export default App;
