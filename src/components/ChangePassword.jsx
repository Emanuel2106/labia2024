import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper } from '@mui/material';
import useStyles from './styles';

function ChangePassword() {
  const classes = useStyles();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/change-password', {
        currentPassword,
        newPassword
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
          label="Current Password"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" className={classes.submit}>
          Change Password
        </Button>
      </form>
    </Paper>
  );
}

export default ChangePassword;
