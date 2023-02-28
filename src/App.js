import './App.css';
import CountriesData from './countries.json';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/:id" element={<SomeComponent someData={someData} />} />
      </Routes>
    </div>
  );
}

export default App;
