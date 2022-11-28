import React from "react";
import Link from '@mui/material/Link';
import { styles } from "./styles";

import IconTwitter from '../../assets/twitter.svg';
import IconDiscord from '../../assets/discord.svg';
import IconTelegram from '../../assets/telegram.svg';

const SocialIcon = (props) => {
  const { type, href, color } = props;

  return (
    <Link href={href} style={{...styles.socialIconWrapper, backgroundColor: color}}>
      { type === 'twitter' && (<IconTwitter style={styles.socialIcon} />) }
      { type === 'discord' && (<IconDiscord style={styles.socialIcon} />) }
      { type === 'telegram' && (<IconTelegram style={styles.socialIcon} />) }
    </Link>
  );
};

export default SocialIcon;