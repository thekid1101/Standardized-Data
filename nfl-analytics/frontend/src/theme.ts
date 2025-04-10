import { createTheme } from '@mui/material/styles';

// NFL-inspired color palette
const nflColors = {
  primary: {
    main: '#013369', // NFL Blue
    light: '#1a4d8f',
    dark: '#002244',
  },
  secondary: {
    main: '#D50A0A', // NFL Red
    light: '#e63939',
    dark: '#b30000',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#333333',
    secondary: '#666666',
  },
  // Additional colors for team-specific accents
  success: {
    main: '#2E7D32', // Green for positive stats
  },
  warning: {
    main: '#ED6C02', // Orange for warnings
  },
  error: {
    main: '#D32F2F', // Red for errors/negative stats
  },
  info: {
    main: '#0288D1', // Blue for information
  },
};

// Create the theme
const theme = createTheme({
  palette: nflColors,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: nflColors.primary.main,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: nflColors.primary.main,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: nflColors.primary.main,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: nflColors.primary.main,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: nflColors.primary.main,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: nflColors.primary.main,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: nflColors.primary.light,
          '& .MuiTableCell-head': {
            color: '#ffffff',
            fontWeight: 600,
          },
        },
      },
    },
  },
});

export default theme; 