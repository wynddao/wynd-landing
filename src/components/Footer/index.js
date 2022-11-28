import React from "react";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const mdUp = useMediaQuery("(min-width:900px)");

  return (
    <div>Footer</div>
  );
};

export default Footer;