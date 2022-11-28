import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Polygon from '../../assets/polygon_2.svg';
import Analyze from '../../assets/start_wynning_analyze.svg';
import Govern from '../../assets/start_wynning_govern.svg';
import Build from '../../assets/start_wynning_build.svg';
import { styles } from './styles';

const StartWynning = () => {
  return (
    <section style={styles.section}>
      <Polygon style={styles.bgPolygon} />
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" marginBottom="50px" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={5}>
            <Typography
              variant="h1"
              style={styles.H1}
            >
              Start Wynning
            </Typography>
          </Grid>
          <Grid 
            item 
            xs={7} 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Divider orientation="vertical" style={styles.divider} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Analyze />
            <Typography
              variant="h2"
              style={styles.H2}
            >
              Analyze
            </Typography>
            <Typography
              variant="small"
              style={styles.small}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies sed pharetra volutpat ut. Justo aliquam ullamcorper feugiat hendrerit mauris in est.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Govern />
            <Typography
              variant="h2"
              style={styles.H2}
            >
              Govern
            </Typography>
            <Typography
              variant="small"
              style={styles.small}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies sed pharetra volutpat ut. Justo aliquam ullamcorper feugiat hendrerit mauris in est.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Build />
            <Typography
              variant="h2"
              style={styles.H2}
            >
              Build
            </Typography>
            <Typography
              variant="small"
              style={styles.small}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies sed pharetra volutpat ut. Justo aliquam ullamcorper feugiat hendrerit mauris in est.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StartWynning;