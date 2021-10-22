import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  text: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 400,
    color: "#FFFEFE",
    textAlign: "center",
  },
  textSmall: {
    fontFamily: "Work Sans, sans-serif",
    fontSize: "10px",
    fontWeight: 200,
    color: "#FFFEFE",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#A8DEE0",
    marginTop: "1rem",
    padding: "1rem",

    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
}));

const Footer = () => {
  const { text, textSmall, container } = useStyles();
  return (
    <div className={container}>
      <div className={text}>Made with * in Melbourne</div>
      <div className={textSmall}>©2021 Broccoli & Co All rights Reserved</div>
    </div>
  );
};
export default Footer;
