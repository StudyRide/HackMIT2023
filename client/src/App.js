import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

import RidesComponent from './RidesComponent'
import Main_Container_1 from './Main_Container_1';

import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
    </>
  );
}

export default App;
