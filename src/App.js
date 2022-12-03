import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import HomeLayout from './layouts/HomeLayout';
import AdminPage from './pages/AdminPage';
import DangKiVip from './pages/Home/DangKiVip';
import Home from './pages/Home/Home';
import RutTien from './pages/Home/RutTien';
import XemQuangCao from './pages/Home/XemQuangCao';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomeLayout />} >
            <Route path='' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/xemquangcao' element={<XemQuangCao />} />
            <Route path='/dangkivip' element={<DangKiVip />} />
            <Route path='/ruttien' element={<RutTien />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/admin' element={<AdminPage />} />

         


          <Route path='*' element={<IndexPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
