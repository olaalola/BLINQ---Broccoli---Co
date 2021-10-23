import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#A8DEE0",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    padding: "1rem",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
}));

export default function Header() {
  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return <Toolbar>{Logo}</Toolbar>;
  };

  const Logo = (
    <Typography variant="h6" component="h1" className={logo}>
      Broccoli & Co.
    </Typography>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
