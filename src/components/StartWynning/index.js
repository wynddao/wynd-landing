import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Slide';
import { useInView } from 'react-hook-inview'
import Polygon from '../../assets/polygon_2.svg';
import Analyze from '../../assets/start_wynning_analyze.svg';
import Govern from '../../assets/start_wynning_govern.svg';
import Build from '../../assets/start_wynning_build.svg';
import { styles } from './styles';

const StartWynning = () => {
  const [ref, isVisible] = useInView();

  return (
    <section style={styles.section} ref={ref}>
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
            }
          }}>
            <Zoom when={isVisible}>
              <Analyze />
            </Zoom>
            <Fade when={isVisible} bottom>
              <Typography
                variant="h3"
                style={styles.h3}
              >
                Govern
              </Typography>
              <Typography
                variant="text"
              >
                WYND DAO governance is a system of decision-making and control for DAOs that use blockchain technology. It allows for decentralized and transparent decision-making by allowing all members of the DAO to vote on proposals.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={10} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
            }
          }}>
            <Zoom when={isVisible} delay={200}>
              <Govern />
            </Zoom>
            <Fade when={isVisible} bottom delay={200}>
              <Typography
                variant="h3"
                style={styles.h3}
              >
                Synergize
              </Typography>
              <Typography
                variant="text"
              >
                WYND DAO will launch a series of defi protocols. Each new protocol will independently add value and drive synergistic value with the rest of the WYND suite. <br/> WYND also partners extensively with other projects within the space.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center'
            }
          }}>
            <Zoom when={isVisible} delay={400}>
              <Build />
            </Zoom>
            <Fade when={isVisible} bottom delay={400}>
              <Typography
                variant="h3"
                style={styles.h3}
              >
                Build
              </Typography>
              <Typography
                variant="text"
              >
                CosmWasm is designed to be interoperable with other blockchains and protocols in the Cosmos ecosystem, allowing for seamless integration with other tools and services. <br/>The benefits of building using CosmWasm are interoperability, security, modularity and more.
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StartWynning;