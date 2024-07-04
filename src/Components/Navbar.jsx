
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

  <Box>
  <AppBar position="static" style={{backgroundColor:"purple"}}>
    <Toolbar>
      <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}>
        EmployeeApp
      </Typography>
    <Link to={'/'} > <Button color="inherit" style={{color:'white'}}>EmployeeDashboard</Button></Link> 
    <Link to={'/EmployeeForm'} >  <Button  color="inherit" style={{color:'white'}} >EmployeeForm</Button></Link> 
    </Toolbar>
  </AppBar>
</Box>

  );
}

export default Navbar;

