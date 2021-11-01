import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Spacer, Text } from "@chakra-ui/layout";
import React from "react";
import MainProf from "../assets/main.png";
import "../App.css";

const HomeSection = () => {
  return (
    <Box ml={{ base: "30px", md: "70px" }} mr={{ base: "30px", md: "70px" }}>
      <Container
        maxW="container.lg"
        border="1px solid white"
        boxShadow="xl"
        my="50px"
        borderRadius="10"
        background="rgb(250, 202, 246)"
        // h="520px"
        height={{
          base: "400px", // 0-30em
          md: "400px", // 30em-48em
          lg: "520px", // 48em-62em
          // "15%", // 62em+
        }}
      >
        <Box d="flex">
          <Box
            mt={{ base: "100px", md: "100px" }}
            ml={{ base: "10px", md: "70px", lg: "100px" }}
            fontSize={{ base: "10px", md: "15px", lg: "20px" }}
          >
            <Text fontWeight="normal" mb="5">
              Hello, I'm
            </Text>
            <Heading fontWeight="500" mb="5">
              Emraan Iqbal
            </Heading>
            <Text fontWeight="normal" mb="5" as="h6" size="xs">
              React Js web developer
            </Text>
          </Box>
          <Spacer />
          <Box ml="auto" mr="auto">
            <Image
              src={MainProf}
              borderRadius="100%"
              w="100%"
              h="100%"
              boxSize="295px"
              objectFit="cover"
              border="7px solid white"
              mt={{ base: "50px", md: "50px", lg: "100px" }}
              mr="100"
              // h={{ base: "160px", md: "200px", lg: "300px" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeSection;
