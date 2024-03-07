// import React, { useState } from 'react';
// import {  Paper, TextField, Typography } from '@mui/material';
// import { Container } from '@mui/system';
// import Button from '@mui/material/Button';
// import useStyles from './styles';



// function Signup() {
//   const classes = useStyles();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     if (e.target.value.length < 6) {
//       setConfirmPasswordError('La contraseña debe tener al menos 6 caracteres');
//     } else if (e.target.value !== password) {
//       setConfirmPasswordError('La contraseña no coincide');
//     } else {
//       setConfirmPasswordError('');
//     }
//   }

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
//     let emailErrorText = '';
//     let passwordErrorText = '';
//     let confirmPasswordErrorText = '';
  
//     if (!email.trim()) {
//       emailErrorText = 'El campo de correo electrónico es obligatorio';
//     } else if (!validateEmail(email)) {
//       emailErrorText = 'Ingrese un correo electrónico válido';
//     }
  
//     if (!password.trim()) {
//       passwordErrorText = 'El campo de contraseña es obligatorio';
//     } else if (password.length < 6) {
//       passwordErrorText = 'La contraseña debe tener al menos 6 caracteres';
//     }
  
//     if (!confirmPassword.trim()) {
//       confirmPasswordErrorText = 'Por favor, confirme su contraseña';
//     } else if (confirmPassword !== password) {
//       confirmPasswordErrorText = 'La contraseña no coincide';
//     }
  
//     setEmailError(emailErrorText);
//     setPasswordError(passwordErrorText);
//     setConfirmPasswordError(confirmPasswordErrorText);
  
//     // Check if all fields are filled and valid
//     if (!emailErrorText && !passwordErrorText && !confirmPasswordErrorText) { 
//       alert('Cuenta creada');
//     }
//   };
  
  

//   return (
//     <Container maxWidth="xs">
//       <Paper className={classes.paper} elevation={3}>
//         <img className={classes.logo} src='/cpu.svg' alt='logo' />
//         <Typography className={classes.title} variant='h4' align='center' gutterBottom>
//           Registrarse
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
//           <TextField
//             label='Confirmar tu Contraseña'
//             variant='outlined'
//             fullWidth
//             type='password'
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             error={Boolean(confirmPasswordError)}
//             helperText={confirmPasswordError}
//           />
//           <Button className={classes.submit} variant='contained' color="primary" type='submit' fullWidth>
//             Registrarse
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default Signup;




import React, { useState } from 'react';
import { Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import useStyles from './styles';
import axios from 'axios';

function Signup() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError('La contraseña no coincide');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSignup = (e) => {
    e.preventDefault();

    let emailErrorText = '';
    let passwordErrorText = '';
    let confirmPasswordErrorText = '';

    if (!email.trim()) {
      emailErrorText = 'El campo de correo electrónico es obligatorio';
    } else if (!validateEmail(email)) {
      emailErrorText = 'Ingrese un correo electrónico válido';
    }

    if (!password.trim()) {
      passwordErrorText = 'El campo de contraseña es obligatorio';
    } else if (!validatePassword(password)) {
      passwordErrorText = 'La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial';
    }

    if (!confirmPassword.trim()) {
      confirmPasswordErrorText = 'Por favor, confirme su contraseña';
    } else if (confirmPassword !== password) {
      confirmPasswordErrorText = 'La contraseña no coincide';
    }

    setEmailError(emailErrorText);
    setPasswordError(passwordErrorText);
    setConfirmPasswordError(confirmPasswordErrorText);

    if (!emailErrorText && !passwordErrorText && !confirmPasswordErrorText) {
        const usuario = {
            usu_persona: 'ID de la persona', // Asegúrate de manejar este campo según tu lógica de negocio
            usu_login: email,
            usu_password: password,
            usu_estado: 'activo' // Asegúrate de manejar este campo según tu lógica de negocio
        };

        axios.post('http://localhost:8081/api/usuario', usuario)
            .then(response => {
                alert('Cuenta creada con éxito');
                // Redirigir al usuario o manejar la respuesta según sea necesario
            })
            .catch(error => {
                alert('Hubo un error al crear la cuenta');
                console.error(error);
                console.log(error);
            });
          }
  };


  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <img className={classes.logo} src='/cpu.svg' alt='logo' />
        <Typography className={classes.title} variant='h4' align='center' gutterBottom>
          Registrarse
        </Typography>
        <form className={classes.form} onSubmit={handleSignup}>
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
          <TextField
            label='Confirmar tu Contraseña'
            variant='outlined'
            fullWidth
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
          />
          <Button className={classes.submit} variant='contained' color="primary" type='submit' fullWidth>
            Registrarse
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Signup;





