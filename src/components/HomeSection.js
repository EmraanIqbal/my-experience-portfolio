// import { Box, Container } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import MainProf from "../assets/main-profile.png";
import "../App.css";
import { Avatar } from "@chakra-ui/avatar";

const HomeSection = () => {
  return (
    <Box>
      <Container
        maxW="container.lg"
        border="1px solid grey"
        my="100px"
        borderRadius="10"
      >
        <Box d="flex">
          <Box>
            <Text>Hello, I'm</Text>
            <Heading>Emraan Iqbal</Heading>
            <Heading as="h6" size="xs">
              React Js web developer
            </Heading>
          </Box>
          <Box>
            <Image
              src={MainProf}
              // borderRadius="full"
              boxSize="295px"
              // objectFit="cover"
              backgroundColor="red"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeSection;
