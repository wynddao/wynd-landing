import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
          justifyContent: {
            xs: 'center',
            md: 'space-between'
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
            <SocialIcon type="twitter" color="rgba(111, 207, 151, 0.2)" href="#"/>
            <SocialIcon type="discord" color="rgba(111, 207, 151, 0.2)" href="#"/>
            <SocialIcon type="telegram" color="rgba(111, 207, 151, 0.2)" href="#"/>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;