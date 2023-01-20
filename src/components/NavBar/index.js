import React, {useState, useEffect} from "react";
import { ButtonGroup, useMediaQuery } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from '@mui/material/Slide';
import RevealSlide from 'react-reveal/Slide';
import { styles } from "./styles";

import LogoGroup from '../../assets/logo_group.svg';
import Hamburger from '../../assets/hamburger.svg';
import SocialIcon from "../SocialIcon";

const NavBar = (props) => {
  const {checkDisclaimer} = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true
  });

  return (
    <AppBar 
      position="fixed"
      style={trigger ? styles.scrolled : null}  
      sx={{ 
        boxShadow: 'none',
        background: {
          xs: 'linear-gradient(0deg, #131222, #131222),linear-gradient(0deg, #31253F, #31253F)',
          md: 'rgba(0,0,0,0)'
        },
        borderBottom: {
          xs: '1px solid rgba(49, 37, 63, 1)',
          md: 'none'
        },
        transition: 'height 1s'
    }}>
      <Container maxWidth="lg" sx={{
        position: 'relative',
        px: {
          xs: 2.5,
          md: 6
        },
        py: {
          xs: trigger? 1 : 2,
          md: trigger? 1.5 : 4
        }
      }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center'}}>
            <RevealSlide top delay={100} mountOnEnter unmountOnExit when={isVisible}>
              <LogoGroup style={styles.logoGroup} />
            </RevealSlide>
            <Box sx={{display: { xs: "none", md: "flex" }}}>
              <RevealSlide top delay={200} mountOnEnter unmountOnExit when={isVisible}>
                <SocialIcon type="twitter" color="#2F2C71" href="https://twitter.com/wynddao"/>
              </RevealSlide>
              <RevealSlide top delay={300} mountOnEnter unmountOnExit when={isVisible}>
                <SocialIcon type="discord" color="#2F2C71" href="https://discord.gg/GAMrnkbmj4"/>
              </RevealSlide>
              <RevealSlide top delay={400} mountOnEnter unmountOnExit when={isVisible}>
                <SocialIcon type="telegram" color="#2F2C71" href="https://telegram.me/wynd_dao"/>
              </RevealSlide>
            </Box>
          </Box>
          <Box>
            <Slide direction="down" timeout={1000} style={{transitionDelay: 500}} in={isVisible} mountOnEnter unmountOnExit>
              <Button href="https://docs.wynddao.com/" target="_blank" color="primary" style={styles.button} sx={{display: { xs: "none", md: "inline-flex" }}}>
                Documentation
              </Button>
            </Slide>
            <Slide direction="down" timeout={1000} style={{transitionDelay: 600}} in={isVisible} mountOnEnter unmountOnExit>
              <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{mr: {xs:2, md: 0}, display: {xs: 'none', md: 'inline-flex'}}}>
                <Button href="https://app.wynddao.com/" target="_blank" style={styles.button} sx={{
                  borderTopRightRadius: {
                    md: 0
                  },
                  borderBottomRightRadius: {
                    md: 0
                  }
                }}>
                  Governance
                </Button>
                <Button onClick={checkDisclaimer} style={styles.button} sx={{
                  borderLeft: 'none',
                  borderTopLeftRadius: {
                    md: 0
                  },
                  borderBottomLeftRadius: {
                    md: 0
                  }
                }}>
                  Launch DEX
                </Button>
              </ButtonGroup>
            </Slide>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{display: { xs: "inline-flex", md: "none" }, pr: {xs: 0, md: 1}}}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <Hamburger/>
            </IconButton>
          </Box>
        </Toolbar>
        <Box style={styles.drawer} sx={{
          display: isDrawerOpen? 'block' : 'none',
          mt: 3,
          mx: 2, 
          p: 1
        }}>
          <Button href="https://docs.wynddao.com/" target="_blank" style={styles.drawerButton} color="primary">
            Documentation
          </Button>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <SocialIcon type="twitter" color="#2F2C71" href="https://twitter.com/wynddao"/>
            <SocialIcon type="discord" color="#2F2C71" href="https://discord.gg/GAMrnkbmj4"/>
            <SocialIcon type="telegram" color="#2F2C71" href="https://telegram.me/wynd_dao"/>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;