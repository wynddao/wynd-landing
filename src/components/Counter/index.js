import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import treeBG from './trees.jpg';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <Box sx={{
        height: '600px',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to bottom, rgba(57,53,112, 0.3), rgba(19, 18, 34, 1))',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: '64px 0',
        marginBottom: '64px'
    }}>
        <Box sx={{
            position: 'absolute',
            zIndex: -1,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${treeBG})`
        }}/>
        <Typography variant="h1">
            Charity
        </Typography>
        <Box sx={{
            display: 'flex', 
            width: '100%', 
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Box>
                <Typography variant="h2">
                    <CountUp separator="" end={6969} />
                </Typography>
                <Typography variant="h4">
                    Trees planted
                </Typography>
            </Box>
            <Box>
                <Typography variant="h2">
                    <CountUp separator="" end={6969} />
                </Typography>
                <Typography variant="h4">
                    Trees planted
                </Typography>
            </Box>
            <Box>
                <Typography variant="h2">
                    <CountUp separator="" end={6969} />
                </Typography>
                <Typography variant="h4">
                    Trees planted
                </Typography>
            </Box>
        </Box>
    </Box>
  );
};

export default Counter;