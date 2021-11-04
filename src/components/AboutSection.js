import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/layout";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import React, { useState } from "react";
import MainProf from "../assets/main-profile.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const AboutSection = () => {
  const [expId] = useState(1);
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
        mb="40px"
        // h="520px"
        // height={{
        //   base: "400px", // 0-30em
        //   md: "400px", // 30em-48em
        //   lg: "1000px", // 48em-62em
        //   // "15%", // 62em+
        // }}
        h="inherit"
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
                width="332px"
                objectFit="cover"
                borderRadius="10px"
                border="3px solid white"
                h="480px"
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

              <Tabs mt="20px">
                <HStack>
                  {/* <TabList> */}
                  <Tab
                    _focus={{ outline: "0" }}
                    _selected={{ color: "#d45366" }}
                    variant="outline"
                    border="none"
                    textTransform="capitalize"
                    mr="20px"
                    fontSize="20px"
                    fontWeight="500"
                    color="#011d48"
                    p="2"
                    background="transparent"
                    id="1"
                  >
                    education
                  </Tab>

                  <Tab
                    _focus={{ outline: "0" }}
                    _selected={{ color: "#d45366" }}
                    variant="outline"
                    border="none"
                    textTransform="capitalize"
                    color="#011d48"
                    mr="20px"
                    fontSize="20px"
                    fontWeight="500"
                    p="2"
                    background="transparent"
                  >
                    experience
                  </Tab>
                </HStack>
                <Box d="flex">
                  <TabPanels>
                    {/* <Slider
                      aria-label="slider-ex-3"
                      defaultValue={100}
                      fixedValue="50"
                      focusThumbOnChange={true}
                      orientation="vertical"
                      minH="600px"
                      w="10px"
                    >
                      <SliderTrack>
                        <SliderFilledTrack bgColor="#d45366" />
                      </SliderTrack>
                      <SliderThumb bgColor="#d45366" />
                    </Slider> */}
                    <TabPanel>
                      <Box ml="46px" id="1">
                        <Heading mt="2" color="#d45366" as="h5" size="sm">
                          2007-2012
                        </Heading>
                        <Box>
                          <Heading
                            color="#011d48"
                            as="h5"
                            size="sm"
                            textTransform="capitalize"
                            d="flex"
                            alignItems="center"
                            mt="1"
                          >
                            Primary education -
                            <Heading as="h6" size="xs" ml="1">
                              islamic ideal school
                            </Heading>
                          </Heading>
                          <Text color="#011d48" my="2">
                            Primary education is typically the first stage of
                            formal education, coming preschool/kindergarten and
                            before secondary school. Primary education takes
                            place in primary school.
                          </Text>
                        </Box>
                        <Heading mt="2" color="#d45366" as="h5" size="sm">
                          2012-2017
                        </Heading>
                        <Box>
                          <Heading
                            color="#011d48"
                            as="h5"
                            size="sm"
                            textTransform="capitalize"
                            d="flex"
                            alignItems="center"
                            mt="1"
                          >
                            secondary education -
                            <Heading as="h6" size="xs" ml="1">
                              divisional public school (dps)
                            </Heading>
                          </Heading>
                          <Text color="#011d48" my="2">
                            Secondary education covers two phases on the
                            International Standard Classification of Education
                            scale. Level 2 or lower secondary education is
                            considered the second and final phase of basic
                            education.
                          </Text>
                        </Box>
                        <Heading mt="3" color="#d45366" as="h5" size="sm">
                          2017-2020
                        </Heading>
                        <Box>
                          <Heading
                            color="#011d48"
                            as="h5"
                            size="sm"
                            textTransform="capitalize"
                            d="flex"
                            alignItems="center"
                            mt="1"
                          >
                            higher education -
                            <Heading as="h6" size="xs" ml="1">
                              unique group of institution
                            </Heading>
                          </Heading>
                          <Text color="#011d48" my="2" justifyContent="center">
                            Higher education is tertiary education leading to
                            award of an academic degree. Higher education, also
                            called post-secondary education, third-level or
                            tertiary education.
                          </Text>
                        </Box>
                        <Heading mt="3" color="#d45366" as="h5" size="sm">
                          2020-2024
                        </Heading>
                        <Box>
                          <Heading
                            color="#011d48"
                            as="h5"
                            size="sm"
                            textTransform="capitalize"
                            d="flex"
                            alignItems="center"
                            mt="1"
                          >
                            BS Computer Science -
                            <Heading as="h6" size="xs" ml="1">
                              Government College University Lahore (GCUL)
                            </Heading>
                          </Heading>
                          <Text color="#011d48" my="2" justifyContent="center">
                            This Institution is one of the oldest seats of
                            learning in the Muslim world. As a seat of higher
                            learning GC University blends grand old traditions
                            and modern educational standards to meet the ideals
                            set by persons like Dr. Leitner, philosopher the
                            poet, Dr. Muhammad Iqbal and the Noble Laureate, Dr.
                            Abdus Salam.
                          </Text>
                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <Box ml="46px" mb="50px" id="1">
                        <Heading mt="2" color="#d45366" as="h5" size="sm">
                          2019-2020
                        </Heading>
                        <Box>
                          <Heading
                            color="#011d48"
                            as="h5"
                            size="sm"
                            textTransform="capitalize"
                            d="flex"
                            alignItems="center"
                            mt="1"
                          >
                            Front-end developer -
                            <Heading as="h6" size="xs" ml="1">
                              wide tech solutions
                            </Heading>
                          </Heading>
                          <Text color="#011d48" my="2">
                            Front-end web development is the development of the
                            graphical user interface of a website, through the
                            use of HTML, CSS, and JavaScript, so that users can
                            view and interact with that website.
                          </Text>
                        </Box>
                        <Heading mt="2" color="#d45366" as="h5" size="sm">
                          2020-2021
                        </Heading>
                        <Box>
                          <Heading
                            color="#011d48"
                            as="h5"
                            size="sm"
                            textTransform="capitalize"
                            d="flex"
                            alignItems="center"
                            mt="1"
                          >
                            react js developer -
                            <Heading as="h6" size="xs" ml="1">
                              LEADconcept solution leaders
                            </Heading>
                          </Heading>
                          <Text color="#011d48" my="2">
                            ReactJS developers are front-end developers who
                            build modern-day UI components to improvise
                            application performance. They leverage their
                            knowledge about JavaScript, HTML, CSS and work
                            closely with testers, designers, web designers, and
                            project managers to create a robust and effective
                            application.
                          </Text>
                        </Box>
                        <Heading mt="3" color="#d45366" as="h5" size="sm">
                          2021-2022
                        </Heading>
                        <Box>
                          <Heading
                            color="#011d48"
                            as="h5"
                            size="sm"
                            textTransform="capitalize"
                            d="flex"
                            alignItems="center"
                            mt="1"
                          >
                            MERN Stack developer -
                            <Heading as="h6" size="xs" ml="1">
                              404 not found
                            </Heading>
                          </Heading>
                          <Text color="#011d48" my="2" justifyContent="center">
                            MERN stands for MongoDB, Express, React, Node, after
                            the four key technologies that make up the stack.
                            ... Express and Node make up the middle
                            (application) tier.
                          </Text>
                        </Box>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Box>
                <HStack spacing="25px" ml="10px" mt="10px" mb="50px">
                  <Link>
                    <Badge
                      border="2px solid white"
                      fontSize="18px"
                      color="#d45366"
                      bg="pink.50"
                      borderRadius="full"
                      p="2"
                      pl="6"
                      pr="6"
                      textTransform="capitalize"
                      transition="0.3 ease"
                      _hover={{
                        background: "pink.300",
                        color: "pink.500",
                      }}
                    >
                      download cv
                    </Badge>
                  </Link>
                  <Link>
                    <Badge
                      border="2px solid white"
                      fontSize="18px"
                      color="#d45366"
                      bg="pink.50"
                      borderRadius="full"
                      p="2"
                      pl="6"
                      pr="6"
                      textTransform="capitalize"
                      transition="0.3 ease"
                      _hover={{
                        background: "pink.300",
                        color: "pink.500",
                      }}
                    >
                      contact me
                    </Badge>
                  </Link>
                </HStack>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
