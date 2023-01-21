import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Polygon from "../../assets/polygon_1.svg";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import Animation from "./Updated/2.json";
import { styles } from "./styles";
import { assetList } from "@wynddao/asset-list";

const Experience = () => {
  const options = {
    animationData: Animation,
    loop: false,
    autoplay: false,
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

  const [totalStaked, setTotalStaked] = useState("-");
  const [wyndPrice, setWyndPrice] = useState("-");
  const [totalTVL, setTotalTVL] = useState("-");

  useEffect(() => {
    data().then((res) => {
      setTotalStaked((res.total_staked / 1000000 / 1000000).toFixed(1));
    });
    fetchPrice();
  }, []);

  const data = async () => {
    const rpcEndpoint = "https://rpc-juno-wynd.mib.tech/";
    const client = await CosmWasmClient.connect(rpcEndpoint);

    const contractAddress =
      "juno1sy9mlw47w44f94zea7g98y5ff4cvtc8rfv75jgwphlet83wlf4ssa050mv";
    return await client.queryContractSmart(contractAddress, {
      total_staked: {},
    });
  };

  const formatCurrencyStatic = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  const fetchPrice = async () => {
    // WYND Token Address
    const wyndTokenAddress =
      "juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9";

    // Fetch API to get all tokens
    const allPrices = await (
      await fetch("https://api.wynddao.com/assets/prices")
    ).json();

    // Find WYND Entry and return usd price
    const _wyndPrice = allPrices.find(
      (el) => el.asset == wyndTokenAddress
    )?.priceInUsd;

    // Format and set WYND price to show on the page
    const formatedUSDPrice = formatCurrencyStatic.format(_wyndPrice);
    setWyndPrice(formatedUSDPrice);

    // Fetch all pools and their assets
    const allPools = await (
      await fetch("https://api.wynddao.com/pools")
    ).json();

    // Loop through pools
    const pricesInUSD = Object.keys(allPools).map((poolAddress) => {
      // Loop through pool assets
      const prices = allPools[poolAddress].map((asset) => {
        // Check if CW20 Toen
        if (asset.hasOwnProperty("token")) {
          const decimal = assetList.tokens.find(
            (el) => el.token_address === asset.token
          ).decimals;
          const unitPrice = allPrices.find(
            (el) => el.asset === asset.token
          ).priceInUsd;
          return (Number(unitPrice) * Number(asset.amount)) / 10 ** decimal;
          // Or native token...
        } else {
          const decimal = assetList.tokens.find(
            (el) => el.juno_denom === asset.native || el.denom === asset.native
          )?.decimals;
          const unitPrice = allPrices.find(
            (el) => el.asset === asset.native
          ).priceInUsd;
          return (Number(unitPrice) * Number(asset.amount)) / 10 ** decimal;
        }
      });

      return Number(prices[0]) + Number(prices[1]);
    });

    const _totalTVL = pricesInUSD.reduce((acc, b) => acc + b, 0);
    const formattedPrice = (_totalTVL / 1000000).toFixed(2);
    setTotalTVL(formattedPrice + "M $");
  };

  return (
    <section style={styles.section}>
      <Polygon style={styles.bgPolygon} />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          style={styles.H2}
          sx={{ mt: { xs: 5, sm: 0 } }}
        >
          The cross chain native DeFi and
          <br /> ReFi experience
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          rowSpacing={1.5}
          columnSpacing={{ xs: 1, md: 2, md: 3 }}
        >
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography variant="text" style={styles.text}>
                total value locked
              </Typography>
              <Typography variant="subtitle1">{totalTVL}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography variant="text" style={styles.text}>
                $wynd price
              </Typography>
              <Typography variant="subtitle1">{wyndPrice}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} zIndex={1}>
            <Box style={styles.box}>
              <Typography variant="text" style={styles.text}>
                total staked $WYND
              </Typography>
              <Typography variant="subtitle1">{totalStaked}M</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          marginTop: {
            xs: "-180px",
            sm: "-350px",
            md: "-500px",
          },
          width: {
            xs: "200%",
            md: "100%",
          },
          transform: {
            xs: "translateX(-25%)",
            md: "none",
          },
          mb: 7,
        }}
      >
        {View}
      </Box>
    </section>
  );
};

export default Experience;
