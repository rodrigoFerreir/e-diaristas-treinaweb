import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.styles";
import { Toolbar, Container } from "@material-ui/core";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
