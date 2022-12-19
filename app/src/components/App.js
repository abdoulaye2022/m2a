import './App.css';
import Home from "../pages/Home";
import { Route, Routes } from 'react-router-dom';
import Layout from './parchales/Layout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
