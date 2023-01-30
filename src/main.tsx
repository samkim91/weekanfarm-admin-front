import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@emotion/react';
import {CssBaseline} from '@mui/material';
import theme from './theme';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
        </ThemeProvider>
    </React.StrictMode>,
);
