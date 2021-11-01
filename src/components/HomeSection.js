// import { Box, Container } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Spacer, Text } from "@chakra-ui/layout";
import React from "react";
import MainProf from "../assets/main.png";
import "../App.css";
import { Avatar } from "@chakra-ui/avatar";

const HomeSection = () => {
  return (
    <Box>
      <Container
        maxW="container.lg"
        border="1px solid white"
        boxShadow="xl"
        my="50px"
        borderRadius="10"
        background="rgb(250, 202, 246)"
        h="520px"
      >
        <Box d="flex">
          <Box mt="150" ml="50">
            <Text mb="5">Hello, I'm</Text>
            <Heading fontWeight="500" mb="5">
              Emraan Iqbal
            </Heading>
            <Text mb="5" as="h6" size="xs">
              React Js web developer
            </Text>
          </Box>
          <Spacer />
          <Box ml="auto" mr="auto">
            <Image
              src={MainProf}
              borderRadius="full"
              boxSize="295px"
              objectFit="cover"
              border="7px solid white"
              mt="100"
              mr="100"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeSection;
