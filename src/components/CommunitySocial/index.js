import React from "react";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styles } from "./styles";

import IconTwitter from '../../assets/twitter.svg';
import IconGitHub from '../../assets/github.svg';
import IconCommonWealth from '../../assets/commonwealth.svg';

const CommunitySocial = (props) => {
  const { type, href, head, text } = props;

  return (
    <Link href={href} style={styles.linkBoxWrapper}>
      <Box style={styles.box}>
        <Box style={styles.iconBox}>
          { type === 'twitter' && (<IconTwitter style={styles.socialIcon} />) }
          { type === 'github' && (<IconGitHub style={styles.socialIcon} />) }
          { type === 'commonwealth' && (<IconCommonWealth style={styles.socialIcon} />) }
        </Box>
        <Box my={1.2}>
          <Typography
            variant="h3"
            textAlign="left"
            fontSize="20px"
            lineHeight="24px"
            mb={1}
          >
            {head}
          </Typography>
          <Typography
            variant="text"
            fontSize="14px"
            lineHeight="21px"
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default CommunitySocial;