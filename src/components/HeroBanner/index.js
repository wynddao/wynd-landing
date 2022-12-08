import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HeroDruid from '../../assets/hero_druid.svg';
import HeroBackground from '../../assets/hero_background.svg'
import ButtonArrow from '../../assets/hero_button_arrow.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import RevealSlide from 'react-reveal/Slide';
import { styles } from './styles';

const HeroBanner = () => {
  return (
    <section style={styles.section}>
      <Box style={styles.heroBackgroundContainer} sx={{
        height: {
          xs: '100%',
          md: 'unset'
        },
        width: {
          xs: '100%',
        }
      }}>
        <HeroBackground style={styles.heroBackground} />
      </Box>
      <Container maxWidth="lg" style={styles.container} sx={{
          pt: {
            xs: 18,
            sm: 1,
            md: 16
          },
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          height: {
            xs: '760px',
            sm: '680px'
          }
        }}
      >
        <Box style={styles.textContainer} sx={{
          alignItems: {
            xs: 'center',
            sm: 'flex-start'
          }
        }}>
          <Slide direction="right" style={{transitionDelay: 200}} timeout={1000} in={true} mountOnEnter unmountOnExit>
            <Typography
              variant="h1"
              sx={{
                mb: 2
              }}
            >
              Corsschain DeFi Hub
            </Typography>
          </Slide>

          <Slide direction="right" style={{transitionDelay: 500}} timeout={1000} in={true} mountOnEnter unmountOnExit>
            <Typography
              variant="text"
              sx={{
                textAlign: {
                  xs: 'center',
                  lg: 'left'
                },
                ml: {
                  xs: 0,
                  lg: 0.5
                },
                mb: 5
              }}
            >
              Swap, earn and build on the leading<br/>decentralized Crosschain DeFi Hub
            </Typography>
          </Slide>

          <Slide direction="right" style={{transitionDelay: 800}} timeout={1000} in={true} mountOnEnter unmountOnExit>
            <Button variant="contained" type="reset" style={styles.button}>
              <Typography
                variant="p"
                style={styles.buttonText}
              >
                Launch App
              </Typography>

              <ButtonArrow/>
            </Button>
          </Slide>
        </Box>

        <Box style={styles.druidContainer} sx={{
            width: {
              xs: '140%',
              sm: '80%',
              md: '60%'
            },
            transform: {
              xs: 'translate(5%, 15%)',
              md: 'none'
            }
          }}>
            <RevealSlide right delay={200} mountOnEnter unmountOnExit>
              <HeroDruid style={styles.druid}/>
            </RevealSlide>
        </Box>
      </Container>

      <Box style={styles.bottomBorders} sx={{
        borderBottom: {
          xs: 'none',
          sm: '1px solid #31253F'
        },
        mb: {
          xs: 0,
          sm: 9
        }
      }}>
        <Container maxWidth="lg" style={styles.bottomBordersContainer} sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}/>
      </Box>
    </section>
  );
};

export default HeroBanner;