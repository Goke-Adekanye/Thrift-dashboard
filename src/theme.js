import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  //ADMIN FORM
  form: {
    padding: '1rem',
  },
  formTitle: {
    height: '2.25rem',
    padding: '.6rem',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '.0625rem solid #e8e8e8',
  },
  icon: {
    marginRight: '1rem',
    verticalAlign: 'middle',
  },
  root: {
    marginBottom: '1.5rem',

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#555',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#555',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#555',
    },
  },
});
