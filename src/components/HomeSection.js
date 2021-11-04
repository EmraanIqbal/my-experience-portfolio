import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import MainProf from "../assets/main-profile.png";
import bgImg from "../assets/bg-img.jpg";
import "../App.css";

const HomeSection = () => {
  return (
    <Box
      ml={{ base: "30px", md: "70px" }}
      mr={{ base: "30px", md: "70px" }}
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "pink.500",
          borderRadius: "24px",
        },
      }}
    >
      <Container
        maxW="container.lg"
        border="1px solid white"
        boxShadow="xl"
        my="40px"
        borderRadius="20px"
        background="rgb(250, 202, 246)"
        h="inherit"
        // height={{
        //   base: "400px", // 0-30em
        //   md: "400px", // 30em-48em
        //   lg: "620px", // 48em-62em
        //   // "15%", // 62em+
        // }}
      >
        <Box d="flex" justifyContent="space-between" mb="200px">
          <Box
            mt="180px"
            ml="60px"
            fontSize={{ base: "10px", md: "15px", lg: "20px" }}
            color="#1a1e2b"
          >
            <Text fontWeight="400" mb="5" fontSize="18px">
              Hello, I'm
            </Text>
            <Heading fontWeight="600" mb="5" fontSize="50px">
              Emraan Iqbal
            </Heading>
            <Text fontWeight="500" mb="5" as="h6" size="xs" fontSize="20px">
              React Js web developer
            </Text>
            <HStack spacing="25px">
              <Link my="20px">
                <Badge
                  fontSize="0.8em"
                  color="#d45366"
                  bg="white"
                  borderRadius="full"
                  p="2"
                  pl="4"
                  pr="4"
                  textTransform="capitalize"
                  transition="0.3 ease"
                  _hover={{
                    background: "pink.300",
                    color: "pink.500",
                  }}
                >
                  more about me
                </Badge>
              </Link>
              <Link>
                <Badge
                  fontSize="0.8em"
                  color="#d45366"
                  bg="white"
                  borderRadius="full"
                  p="2"
                  pl="4"
                  pr="4"
                  textTransform="capitalize"
                  transition="0.3 ease"
                  _hover={{
                    background: "pink.300",
                    color: "pink.500",
                  }}
                >
                  portfolio
                </Badge>
              </Link>
            </HStack>
          </Box>
          {/* <Spacer /> */}
          <Box>
            <Image
              src={MainProf}
              borderRadius="100%"
              w="100%"
              h="100%"
              boxSize="295px"
              objectFit="cover"
              border="7px solid white"
              mt={{ base: "50px", md: "50px", lg: "140px" }}
              mr="100px"
              // h={{ base: "160px", md: "200px", lg: "300px" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeSection;
