// // import React, { useState } from 'react';
// // import { Grid, Paper, TextField, Typography } from '@mui/material';
// // import { makeStyles } from '@mui/styles';
// // import { Container } from '@mui/system';
// // import Button from '@mui/material/Button';
// // import Link from '@mui/material/Link';

// // const useStyles = makeStyles((theme) => ({
// //   paper: {
// //     padding: theme.spacing(4),
// //     marginTop: theme.spacing(4),
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: theme.spacing(2),
// //   },
// //   submit: {
// //     marginTop: theme.spacing(2),
// //   },
// //   link: {
// //     textDecoration: 'none',
// //   },
// //   title: {
// //     marginBottom: theme.spacing(4),
// //   },
// //   logo: {
// //     width: 100,
// //     height: 100,
// //     marginBottom: theme.spacing(2),
// //   },
// // }));

// // function Login() {
// //   const classes = useStyles();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [emailError, setEmailError] = useState('');
// //   const [passwordError, setPasswordError] = useState('');

// //   const handleEmailChange = (e) => {
// //     setEmail(e.target.value);

// //     if (!validateEmail(e.target.value)) {
// //       setEmailError('Ingrese email valido');
// //     } else {
// //       setEmailError('');
// //     }
// //   };

// //   const validateEmail = (email) => {
// //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
// //     return emailRegex.test(email);
// //   };

// //   const handlePasswordChange = (e) => {
// //     setPassword(e.target.value);
// //     if (e.target.value.length < 6) {
// //       setPasswordError("Password tiene que tener  al menos 6 caracteres");
// //     } else {
// //       setPasswordError("")
// //     }
    
// //   };

// //   return (
// //     <Container maxWidth="xs">
// //       <Paper className={classes.paper} elevation={3}>
// //         <img className={classes.logo} src='/cpu.svg' alt='logo' />
// //         <Typography className={classes.title} variant='h4' align='center' gutterBottom>
// //           Login
// //         </Typography>
// //         <form className={classes.form}>
// //           <TextField
// //             label='email'
// //             variant='outlined'
// //             fullWidth
// //             value={email}
// //             onChange={handleEmailChange}
// //             error={Boolean(emailError)}
// //             helperText={emailError}
// //           />
// //           <TextField
// //             label='password'
// //             variant='outlined'
// //             fullWidth
// //             value={password}
// //             onChange={handlePasswordChange}
// //             error={Boolean(passwordError)}
// //             helperText={passwordError}
// //           />
          
// //           <Button className={classes.submit} variant='contained' color="primary" type='submit' fullWidth>
// //             Login
// //           </Button>
// //         </form>
        
// //         <Grid container justifyContent="center">
// //           <Grid item>
// //           <br></br>
// //             <Link href="/signup" className={classes.link}>
// //               No tienes cuenta? Registrate.
// //             </Link>
// //           </Grid>
// //         </Grid>
// //       </Paper>
// //     </Container>
// //   );
// // }

// // export default Login;


// import React, { useState } from 'react';
// import { Grid, Paper, TextField, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { Container } from '@mui/system';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import useStyles from './styles';



// function Login() {
//   const classes = useStyles();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError('');
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
//     return emailRegex.test(email);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError('');
//   };

//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent form submission

//     // Validations
//     if (!email.trim()) {
//       setEmailError('El campo de correo electrónico es obligatorio');
//     } else if (!validateEmail(email)) {
//       setEmailError('Ingrese un correo electrónico válido');
//     } else {
//       setEmailError('');
//     }

//     if (!password.trim()) {
//       setPasswordError('El campo de contraseña es obligatorio');
//     } else if (password.length < 6) {
//       setPasswordError('La contraseña debe tener al menos 6 caracteres');
//     } else {
//       setPasswordError('');
//     }

//     // Add your login logic here if needed
//   };

//   return (
//     <Container maxWidth="xs">
//       <Paper className={classes.paper} elevation={3}>
//         <img className={classes.logo} src='/cpu.svg' alt='logo' />
//         <Typography className={classes.title} variant='h4' align='center' gutterBottom>
//           Iniciar Sesion
//         </Typography>
//         <form className={classes.form} onSubmit={handleLogin}>
//           <TextField
//             label='Correo electrónico'
//             variant='outlined'
//             fullWidth
//             value={email}
//             onChange={handleEmailChange}
//             error={Boolean(emailError)}
//             helperText={emailError}
//           />
//           <TextField
//             label='Contraseña'
//             variant='outlined'
//             fullWidth
//             type='password'
//             value={password}
//             onChange={handlePasswordChange}
//             error={Boolean(passwordError)}
//             helperText={passwordError}
//           />
          
//           <Button className={classes.submit} variant='contained' color="primary" type='submit' fullWidth>
//             Login
//           </Button>
//         </form>
        
//         <Grid container justifyContent="center">
//           <Grid item>
//             <br></br>
//             <Link href="/signup" className={classes.link}>
//               ¿No tienes cuenta? Regístrate.
//             </Link>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// }

// export default Login;





import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import useStyles from './styles';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import axios from 'axios';

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!email.trim()) {
      setEmailError('El campo de correo electrónico es obligatorio');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Ingrese un correo electrónico válido');
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError('El campo de contraseña es obligatorio');
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial');
      isValid = false;
    }
    if (isValid) {
      const usuario = {
          usu_login: email,
          usu_password: password
      };

      axios.post('http://localhost:8080/api/login', usuario)
          .then(response => {
              alert('Inicio de sesión exitoso');
              // Almacenar el token de sesión y redirigir al usuario según sea necesario
          })
          .catch(error => {
              alert('Credenciales inválidas');
              console.error(error);
          });
  }
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <img className={classes.logo} src='/cpu.svg' alt='logo' />
        <Typography className={classes.title} variant='h4' align='center' gutterBottom>
          Iniciar Sesión
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            label='Correo electrónico'
            variant='outlined'
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <TextField
            label='Contraseña'
            variant='outlined'
            fullWidth
            type='password'
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          
          <Button className={classes.submit} variant='contained' color="primary" type='submit' fullWidth>
            Login
          </Button>
        </form>
        
        <Grid container justifyContent="center">
          <Grid item>
            <br></br>
            <Link href="/signup" className={classes.link}>
              ¿No tienes cuenta? Regístrate.
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Login;
