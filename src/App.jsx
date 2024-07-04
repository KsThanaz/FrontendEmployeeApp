
import React from 'react';
import Navbar from './Components/Navbar';
import EmployeeDashboard from './Components/EmployeeDashboard';
import EmployeeForm from './Components/EmployeeForm';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main';

 

function App() {

  return (
  
    <>
    <Routes>
  <Route path='/' element={<Main child={<EmployeeDashboard/>}/>}></Route>
  <Route path='/EmployeeForm' element={<Main child={<EmployeeForm/>}/>}></Route>
 </Routes>
  </>
  );
}

export default App;

