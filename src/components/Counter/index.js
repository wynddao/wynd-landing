import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Counter = () => {
  return (
    <Box sx={{
        display: 'flex', 
        width: '100%', 
        justifyContent: 'space-around',
        paddingBottom: '80px',
        paddingTop: '16px'
    }}>
        <Box>
            <Typography variant="h2">
                6969
            </Typography>
            <Typography variant="h4">
                Trees planted
            </Typography>
        </Box>
        <Box>
            <Typography variant="h2">
                6969
            </Typography>
            <Typography variant="h4">
                Trees planted
            </Typography>
        </Box>
        <Box>
            <Typography variant="h2">
                6969
            </Typography>
            <Typography variant="h4">
                Trees planted
            </Typography>
        </Box>
    </Box>
  );
};

export default Counter;