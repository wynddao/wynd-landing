import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SocialIcon from "../SocialIcon";
import { styles } from "./styles";
import LogoGroup from '../../assets/logo_group.svg';

const Footer = () => {
  return (
    <section style={styles.footer}>
      <Container maxWidth="lg" sx={{
        py: 7.5
      }}>
        <Grid container alignItems="center" rowSpacing={4} sx={{
          flexDirection: {
            xs: 'column',
            lg: 'row'
          },
          justifyContent: {
            xs: 'center',
            lg: 'space-between'
          }
        }}>
          <Grid item>
            <LogoGroup/>
          </Grid>
          <Grid item>
            <Typography
              variant="text"
              color="rgba(255, 255, 255, 0.4)"
              sx={{
                fontSize: '14px'
              }}
            >
              Copyright © 2022 WYND. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <SocialIcon type="twitter" color="rgba(111, 207, 151, 0.2)" href="https://twitter.com/wynddao"/>
            <SocialIcon type="discord" color="rgba(111, 207, 151, 0.2)" href="https://discord.gg/GAMrnkbmj4"/>
            <SocialIcon type="telegram" color="rgba(111, 207, 151, 0.2)" href="https://telegram.me/wynd_dao"/>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;