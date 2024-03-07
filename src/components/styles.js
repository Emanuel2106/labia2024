import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  submit: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
