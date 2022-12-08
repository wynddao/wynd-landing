import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Polygon from '../../assets/polygon_1.svg';
import AnimatedImage from './experience.png';
import { styles } from './styles';

const Experience = () => {
  return (
    <section style={styles.section}>
      <Polygon style={styles.bgPolygon} />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          style={styles.H2}
          sx={{mt: {xs: 5, sm: 0}}}
        >
          The cross chain native DeFi and<br/> ReFi experience
        </Typography>
        <Grid container justifyContent="space-between" rowSpacing={1.5} columnSpacing={{ xs: 1, md: 2, md: 3 }}>
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                total value locked
              </Typography>
              <Typography
                variant="subtitle1"
              >
                45M
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                total value locked
              </Typography>
              <Typography
                variant="subtitle1"
              >
                45M
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                total value locked
              </Typography>
              <Typography
                variant="subtitle1"
              >
                45M
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{
        width: {
          xs: '200%',
          md: '100%',
        },
        transform: {
          xs: 'translate(-25%)',
          md: 'none'
        },
        mb: 7
      }}>
        <img style={{width: '100%', marginTop: '-40px'}} src={AnimatedImage}/>
      </Box>
    </section>
  );
};

export default Experience;