import { Box, Paper, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  height?: number | string;
  width?: number | string;
}

const ChartContainer = ({ title, children, height = 400, width = '100%' }: ChartContainerProps) => {
  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 2, 
        height, 
        width,
        display: 'flex',
        flexDirection: 'column',
        '& .recharts-wrapper': {
          flex: 1,
        }
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        {children}
      </Box>
    </Paper>
  );
};

export default ChartContainer; 