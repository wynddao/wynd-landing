import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CommunitySocial from '../CommunitySocial';
import CommunityBackground from '../../assets/community_background.svg';
import CommunityDruid from "./community_druid.png";
import { styles } from './styles';

const Community = () => {
  return (
    <section style={styles.section} >
      <Box style={styles.bgLogoContainer} sx={{
        height: {
          xs: '45vh',
          md: '130%'
        },
        transform: {
          xs: 'translateX(-30%)',
          md: 'none'
        }
      }}>,
        <CommunityBackground style={styles.bgLogo}/>
      </Box>
      <Container sx={{
        position: 'relative',
        py: {
          xs: 5,
          md: 16,
          lg: 24
        },
        pt: {
          xs: 0
        }
      }}>
        <Box style={styles.bgDruidContainer} sx={{
          position: {
            xs: 'static',
            md: 'absolute'
          },
          right: {
            md: '-10%',
            lg: '-15%',
            xl: '-20%'
          },
          width: {
            xs: '100%',
            sm: '65%',
            md: '53%',
            lg: '50%'
          },
          maxHeight: {
            xs: '50vh',
            md: 'none'
          }
        }}>
        <img style={styles.bgDruid} src={CommunityDruid} alt="background_image"/>;
      </Box>
        <Typography
          variant="h1"
          mb={2}
        >
          Join our Community
        </Typography>
        <Typography
          variant="text"
          textAlign="center"
          display="block"
          mb={5}
        >
          Join the discussion on one of our many forums.<br/>
          Learn about WYND community and become an active voice in the space.
        </Typography>
        <Grid container justifyContent="center" rowSpacing={2.5} columnSpacing={{ xs: 1, md: 2, md: 3 }}>
          <Grid item xs={12} md={5}>
            <CommunitySocial type="twitter" head="Twitter" text="Follow the latest Twitter news about the Web3 space and our latest product updates." href="#" />
          </Grid>
          <Grid item xs={12} md={5}>
            <CommunitySocial type="github" head="GitHub" text="Follow our repo on GitHub and stay on top of the latest updates, projects and announcements." href="#" />
          </Grid>
          <Grid item xs={12} md={5}>
            <CommunitySocial type="commonwealth" head="CommonWealth" text="Check us out on CommonWealth." href="#" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Community;