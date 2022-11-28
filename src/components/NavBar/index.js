import React from "react";
import { useMediaQuery } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styles } from "./styles";

import LogoGroup from '../../assets/logo_group.svg';
import SocialIcon from "../SocialIcon";

const NavBar = () => {
  const mdUp = useMediaQuery("(min-width:900px)");

  return (
    <AppBar position="fixed"  style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center'}}>
            <LogoGroup style={styles.logoGroup} />
            <SocialIcon type="twitter" color="#2F2C71" href="#"/>
            <SocialIcon type="discord" color="#2F2C71" href="#"/>
            <SocialIcon type="telegram" color="#2F2C71" href="#"/>
          </Box>
          <Box>
            <Button color="primary">
              Documentation
            </Button>
            <Button variant="outlined">
              Launch App
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;