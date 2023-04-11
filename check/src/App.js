import logo from './logo.svg';
//import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path='/app' element={<Header />} />
    </Routes>
  );
}

export default App;
