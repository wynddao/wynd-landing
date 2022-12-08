import React, { useState} from "react";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Zoom from 'react-reveal/Zoom';
import { styles } from "./styles";

import IconTwitter from '../../assets/twitter.svg';
import IconGitHub from '../../assets/github.svg';
import IconCommonWealth from '../../assets/commonwealth.svg';

const CommunitySocial = (props) => {
  const { type, href, head, text } = props;
  const [isVisible, setVisible] = useState(false);

  return (
    <Zoom wait={600} onReveal={() => setVisible(true)}>
      <Link href={href} style={styles.linkBoxWrapper} sx={{
          maxWidth: {
            xs: 'unset',
            md: isVisible? '100%' : '103px'
          }
        }}>
        <Box style={styles.box}>
          <Box style={styles.iconBox}>
            { type === 'twitter' && (<IconTwitter style={styles.socialIcon} />) }
            { type === 'github' && (<IconGitHub style={styles.socialIcon} />) }
            { type === 'commonwealth' && (<IconCommonWealth style={styles.socialIcon} />) }
          </Box>
          <Box my={1.2} sx={{
            display: isVisible? 'block' : 'none'
          }}>
            <Typography
              variant="h4"
              textAlign="left"
              sx={{
                mb: {
                  xs: 0.3,
                  sm: 1
                }
              }}
            >
              {head}
            </Typography>
            <Typography
              variant="text"
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Zoom>
  );
};

export default CommunitySocial;