import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { JWT_TOKEN } from './utils/constants';
import LoginComponent from './modules/auth/LoginComponent';
import RegisterComponent from './modules/auth/RegisterComponent';
import NotFoundComponent from './modules/shared/NotFoundComponent';
import DashboardLayout from './modules/dashboard/DashboardLayout';
import ProductComponent from './modules/dashboard/components/ProductComponent';
import DashboardComponent from './modules/dashboard/components/DashboardComponent';
import { useState } from 'react';
import AdminLayout from './modules/admin/AdminLayout';
import AdminDashboardComponent from './modules/admin/components/AdminDashboardComponent';
import ManageComponent from './modules/admin/components/ManageComponent';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem(JWT_TOKEN))

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/app" replace />} />
      <Route path='app' element={loggedIn ? <DashboardLayout /> : <Navigate to="/login" replace />} >
        <Route index element={<DashboardComponent />} />
        <Route path='products' element={<ProductComponent />} />
      </Route>
      <Route path='admin' element={loggedIn ? <AdminLayout /> : <Navigate to="/login" replace />} >
        <Route index element={<AdminDashboardComponent />} />
        <Route path='manage' element={<ManageComponent />} />
      </Route>
      <Route path='login' element={<LoginComponent />} />
      <Route path='register' element={<RegisterComponent />} />
      <Route path="*" element={<NotFoundComponent />} />

    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <a className="btn btn-primary"
    //          data-bs-toggle="collapse"
    //          href="#collapseExample"
    //          role="button"
    //          aria-expanded="false"
    //          aria-controls="collapseExample">
    //     Bootstrap button
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
