import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CommunitySocial from '../CommunitySocial';
import CommunityBackground from '../../assets/community_background.svg';
import CommunityDruid from '../../assets/community_druid.svg';
import { styles } from './styles';

const Community = () => {
  return (
    <section style={styles.section} >
      <CommunityBackground style={styles.bgLogo} />
      <CommunityDruid style={styles.bgDruid} />
      <Container>
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
        <Grid container justifyContent="center" rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={5}>
            <CommunitySocial type="twitter" head="Twitter" text="Follow the latest Twitter news about the Web3 space and our latest product updates." href="#" />
          </Grid>
          <Grid item xs={12} sm={5}>
            <CommunitySocial type="github" head="GitHub" text="Follow our repo on GitHub and stay on top of the latest updates, projects and announcements." href="#" />
          </Grid>
          <Grid item xs={12} sm={5}>
            <CommunitySocial type="commonwealth" head="CommonWealth" text="Check us out on CommonWealth." href="#" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Community;