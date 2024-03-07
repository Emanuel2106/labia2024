import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper } from '@mui/material';
import useStyles from './styles';

function ForgotPassword() {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/forgot-password', {
        email
      });
      // Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
    } catch (error) {
      // Manejar el error
    }
  };

  return (
    <Paper className={classes.paper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" className={classes.submit}>
          Send Reset Link
        </Button>
      </form>
    </Paper>
  );
}

export default ForgotPassword;
