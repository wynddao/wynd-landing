import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Slide';
import Polygon from '../../assets/polygon_2.svg';
import Analyze from '../../assets/start_wynning_analyze.svg';
import Govern from '../../assets/start_wynning_govern.svg';
import Build from '../../assets/start_wynning_build.svg';
import { styles } from './styles';

const StartWynning = () => {
  return (
    <section style={styles.section}>
      <Polygon style={styles.bgPolygon} />
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" marginBottom="50px" columnSpacing={{ xs: 1, md: 2, md: 3 }}>
          <Grid item xs={12} md="auto">
            <Typography
              variant="h2"
            >
              Start Wynning
            </Typography>
          </Grid>
          <Grid 
            item 
            xs 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            <Divider orientation="vertical" style={styles.divider} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, md: 2, md: 3, lg: 17 }}>
          <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
              md: 'flex-start'
            }
          }}>
            <Zoom>
              <Analyze />
            </Zoom>
            <Fade bottom>
              <Typography
                variant="h3"
                style={styles.h3}
              >
                Analyze
              </Typography>
              <Typography
                variant="text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies sed pharetra volutpat ut. Justo aliquam ullamcorper feugiat hendrerit mauris in est.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
              md: 'flex-start'
            }
          }}>
            <Zoom delay={200}>
              <Govern />
            </Zoom>
            <Fade bottom delay={200}>
              <Typography
                variant="h3"
                style={styles.h3}
              >
                Govern
              </Typography>
              <Typography
                variant="text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies sed pharetra volutpat ut. Justo aliquam ullamcorper feugiat hendrerit mauris in est.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
              md: 'flex-start'
            }
          }}>
            <Zoom delay={400}>
              <Build />
            </Zoom>
            <Fade bottom delay={400}>
              <Typography
                variant="h3"
                style={styles.h3}
              >
                Build
              </Typography>
              <Typography
                variant="text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies sed pharetra volutpat ut. Justo aliquam ullamcorper feugiat hendrerit mauris in est.
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StartWynning;