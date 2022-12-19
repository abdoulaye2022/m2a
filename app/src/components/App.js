import './App.css';
import Home from "../pages/Home";
import Login from '../pages/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './parchales/Layout';
import HeaderApp from './parchales/HeaderApp';
import Register from '../pages/Register';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/se-connecter' element={<Layout><Login /></Layout>} />
        <Route path='creer-un-compte' element={<Layout><Register /></Layout>}/>
      </Routes>
    </div>
  );
}

export default App;
