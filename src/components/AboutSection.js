import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import MainProf from "../assets/main-profile.png";

const AboutSection = () => {
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
        // h="520px"
        height={{
          base: "400px", // 0-30em
          md: "400px", // 30em-48em
          lg: "700px", // 48em-62em
          // "15%", // 62em+
        }}
      >
        <Box>
          <Box>
            <Heading
              textAlign="center"
              pt="70px"
              pb="50px"
              w="100%"
              textTransform="capitalize"
              fontSize="40px"
              color="#011d48"
            >
              about me
            </Heading>
          </Box>
          <Box d="flex">
            <Box w="40%">
              <Image
                m="auto"
                w="300px"
                objectFit="cover"
                borderRadius="10px"
                border="3px solid white"
                h="400px"
                src={MainProf}
              />
            </Box>
            <Box w="60%">
              <Text color="#011d48">
                I am Emraan Iqbal. I am a passionate and hard working individual
                who wants to deliver something back to the society while growing
                and grooming myself.A hard-working and dependable Web
                Application Programmer and Front End professional with the
                ability to work well both independently and in a team.
              </Text>
              <Heading as="h3" size="md" m="20px 0" color="#011d48">
                Skills
              </Heading>
              <Box d="flex">
                <Box>
                  <Badge
                    color="#011d48"
                    p="5px 15px"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    javascript
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    React js
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    redux js
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    formik
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    chakra ui
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    html5
                  </Badge>
                  <Badge
                    p="5px 15px"
                    m="0 10px 10px 0"
                    color="#011d48"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    css
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    bootstrap
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    firebase
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    yup
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    material ui
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    sql
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    c++
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    oop
                  </Badge>
                  <Badge
                    p="5px 15px"
                    color="#011d48"
                    m="0 10px 10px 0"
                    border="2px solid white"
                    bgColor="pink.50"
                    textTransform="capitalize"
                    borderRadius="full"
                  >
                    php
                  </Badge>
                </Box>
              </Box>
              <Box mt="20px">
                <HStack>
                  <Button
                    variant="outline"
                    border="none"
                    textTransform="capitalize"
                    color="#011d48"
                  >
                    eduction
                  </Button>
                  <Button
                    variant="outline"
                    border="none"
                    textTransform="capitalize"
                    color="#011d48"
                  >
                    experience
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
