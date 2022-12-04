import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Polygon from '../../assets/polygon_1.svg';
import AnimatedImage from '../../assets/experience_animation.svg';
import { styles } from './styles';

const Experience = () => {
  return (
    <section style={styles.section}>
      <Polygon style={styles.bgPolygon} />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          style={styles.H2}
        >
          The cross chain native DeFi and<br/> ReFi experience
        </Typography>
        <Grid container justifyContent="space-between" rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={4}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                total value locked
              </Typography>
              <Typography
                style={styles.fact}
              >
                45M
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                total value locked
              </Typography>
              <Typography
                style={styles.fact}
              >
                45M
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                total value locked
              </Typography>
              <Typography
                style={styles.fact}
              >
                45M
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <AnimatedImage />
    </section>
  );
};

export default Experience;