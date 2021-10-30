// import { Box, Container } from "@chakra-ui/react";
import { Box, Container, Heading } from "@chakra-ui/layout";
import React from "react";
import "../App.css";

const HomeSection = () => {
  return (
    <Box>
      <Container
        maxW="container.lg"
        border="1px solid grey"
        my="100px"
        borderRadius="10"
      >
        <Heading>This is Home section Component</Heading>
      </Container>
    </Box>
  );
};

export default HomeSection;
