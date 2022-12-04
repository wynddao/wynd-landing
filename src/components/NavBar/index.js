import React, {useState} from "react";
import { useMediaQuery } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styles } from "./styles";

import LogoGroup from '../../assets/logo_group.svg';
import Hamburger from '../../assets/hamburger.svg';
import SocialIcon from "../SocialIcon";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          sm: 'rgba(0,0,0,0)'
        },
        borderBottom: {
          xs: '1px solid rgba(49, 37, 63, 1)',
          sm: 'none'
        }
    }}>
      <Container maxWidth="lg" sx={{
        position: 'relative',
        px: {
          xs: 2.5,
          sm: 6
        },
        py: {
          xs: trigger? 1 : 2,
          sm: trigger? 1.5 : 4
        }
      }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center'}}>
            <LogoGroup style={styles.logoGroup} />
            <Box sx={{display: { xs: "none", sm: "flex" }}}>
              <SocialIcon type="twitter" color="#2F2C71" href="#"/>
              <SocialIcon type="discord" color="#2F2C71" href="#"/>
              <SocialIcon type="telegram" color="#2F2C71" href="#"/>
            </Box>
          </Box>
          <Box>
            <Button color="primary" style={styles.button} sx={{display: { xs: "none", sm: "inline-flex" }}}>
              Documentation
            </Button>
            <Button variant="outlined" style={styles.button} sx={{mr: {xs:2, sm: 0}}}>
              Launch App
            </Button>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{display: { xs: "inline-flex", sm: "none" }, pr: {xs: 0, sm: 1}}}
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
          <Button style={styles.drawerButton} color="primary">
            Documentation
          </Button>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <SocialIcon type="twitter" color="#2F2C71" href="#"/>
            <SocialIcon type="discord" color="#2F2C71" href="#"/>
            <SocialIcon type="telegram" color="#2F2C71" href="#"/>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;