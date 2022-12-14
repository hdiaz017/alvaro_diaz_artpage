import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './store/store';

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
   },
   typography: {
      fontFamily: 'Poppins',
   },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
         <BrowserRouter>
            <React.StrictMode>
               <App />
            </React.StrictMode>
         </BrowserRouter>
      </Provider>
   </ThemeProvider>,
);
