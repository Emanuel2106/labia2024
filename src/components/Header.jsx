// import { AppBar, Button, Toolbar,makeStyles } from '@mui/material'
// import { } from '@mui/styles'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const useStyles = makeStyles ((theme)=> ({
//     title:{
//         flexGrow: 1
//     }
// }))

// const Header = () => {
//     const classes = useStyles()
//   return (
//     <AppBar position='static'>
//         <Toolbar>
//             <h1 className={classes.title}>Mui App</h1>
//             <Button color='inherit' component={Link} to='/login' >Login</Button>
//             <Button color='inherit' component={Link} to='/signup' >Sign Up</Button>
//         </Toolbar>
//     </AppBar>
//   )
// }

// export default Header


import { AppBar, Button, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => ({
//   title: {
//     flexGrow: 1,
//   },
// }));





 const useStyles = makeStyles((theme) => ({
   title: {
     flexGrow: 1,
   },
 }));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <h1 className={classes.title}>Lab IA 2024</h1>
        <Button color='inherit' component={Link} to='/login'>
          Login
        </Button>
        <Button color='inherit' component={Link} to='/signup'>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
