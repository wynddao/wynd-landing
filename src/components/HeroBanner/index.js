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
      <Container maxWidth="lg" style={styles.container} sx={{
          pt: 16,
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
        }}
      >
        <Box style={styles.textContainer} sx={{
          alignItems: {
            xs: 'center',
            sm: 'flex-start'
          }
        }}
      >
          <Typography
            variant="h1"
            sx={{
              mb: 2
            }}
          >
            Corsschain DeFi Hub
          </Typography>

          <Typography
            variant="text"
            sx={{
              textAlign: {
                sm: 'center',
                sm: 'left'
              },
              ml: {
                xs: 0,
                sm: 0.5
              },
              mb: 5
            }}
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
        <Container maxWidth="lg" style={styles.bottomBordersContainer}></Container>
      </Box>
    </section>
  );
};

export default HeroBanner;