import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HeroDruid from '../../assets/hero_druid.svg';
import HeroBackground from '../../assets/hero_background.svg'
import ButtonArrow from '../../assets/hero_button_arrow.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styles } from './styles';

const HeroBanner = () => {
  return (
    <section style={styles.section}>
      <HeroBackground style={styles.heroBackground} />
      <Container maxWidth="xl" style={styles.container}>
        <Box style={styles.textContainer}>
          <Typography
            variant="h1"
            style={styles.H1}
          >
            Corsschain DeFi Hub
          </Typography>

          <Typography
            style={styles.text}
          >
            Swap, earn and build on the leading<br/>decentralized Crosschain DeFi Hub
          </Typography>
        
          <Button variant="contained" type="reset" style={styles.button}>
            <Typography
              variant="p"
              style={styles.buttonText}
            >
              Launch App
            </Typography>

            <ButtonArrow/>
          </Button>
        </Box>

        <HeroDruid style={styles.druid} />
      </Container>
      <Box style={styles.bottomBorders}>
        <Container maxWidth="xl" style={styles.bottomBordersContainer}></Container>
      </Box>
    </section>
  );
};

export default HeroBanner;