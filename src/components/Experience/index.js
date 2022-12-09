import React, { useEffect, useState} from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Polygon from '../../assets/polygon_1.svg';
import { useLottie, useLottieInteractivity  } from "lottie-react";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import Animation from "./Updated/2.json";
import { styles } from './styles';

const Experience = () => {
  const options = {
    animationData: Animation,
    loop: false,
    autoplay: false
  };

  const lottieObj = useLottie(options);
  const View = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "seek",
        frames: [0, 400],
      },
    ],
  });

  const [totalStaked, setTotalStaked] = useState(0);

  useEffect(() => {
    data().then((res) => {
      setTotalStaked((res.total_staked / 1000000 / 1000000).toFixed(1));
    });
  }, []);

  const data = async () => {
    const rpcEndpoint = "https://rpc-juno-wynd.mib.tech/";
    const client = await CosmWasmClient.connect(rpcEndpoint)

    const contractAddress = "juno1sy9mlw47w44f94zea7g98y5ff4cvtc8rfv75jgwphlet83wlf4ssa050mv";
    return await client.queryContractSmart(contractAddress, {
      total_staked: {},
    });
  };

  return (
    <section style={styles.section}>
      <Polygon style={styles.bgPolygon} />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          style={styles.H2}
          sx={{mt: {xs: 5, sm: 0}}}
        >
          The cross Chain native DeFi and<br/> ReFi experience
        </Typography>
        <Grid container justifyContent="space-between" rowSpacing={1.5} columnSpacing={{ xs: 1, md: 2, md: 3 }}>
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                total value locked
              </Typography>
              <Typography
                variant="subtitle1"
              >
                -
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                $wynd price
              </Typography>
              <Typography
                variant="subtitle1"
              >
                -
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography
                variant="text"
                style={styles.text}
              >
                total staked $WYND
              </Typography>
              <Typography
                variant="subtitle1"
              >
                {totalStaked}M
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{
        marginTop: {
          xs: '-180px',
          sm: '-350px',
          md: '-500px'
        },
        width: {
          xs: '200%',
          md: '100%',
        },
        transform: {
          xs: 'translateX(-25%)',
          md: 'none'
        },
        mb: 7
      }}>
        {View}
      </Box>
    </section>
  );
};

export default Experience;