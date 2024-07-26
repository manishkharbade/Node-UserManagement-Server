import { createTheme } from '@mui/material/styles';

const lightThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    color: '#000',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#000',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#f5f5f5',
                    color: '#000',
                },
            },
        },
    },
};

const darkThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#333',
                    color: '#fff',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#fff',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#424242',
                    color: '#fff',
                },
            },
        },
    },
};

// Create theme objects
export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
