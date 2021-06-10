import React from "react";
import { Container } from "@material-ui/core";
import { SafeEnvironmentContainer } from "./SafeEnviroment.style";
const SafeEviroment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEviroment;
