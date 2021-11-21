import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import template1 from "../assets/1-template.jpg";
import template2 from "../assets/2-template.jpg";
import template3 from "../assets/3-template.jpg";
import template4 from "../assets/4-template.jpg";
import template5 from "../assets/5-template.jpg";
import template6 from "../assets/6-template.jpg";
import template7 from "../assets/7-template.jpg";
import template8 from "../assets/8-template.jpg";
import template9 from "../assets/9-template.jpg";
import { extendTheme } from "@chakra-ui/react";
import "../App.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

const  = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  extendTheme({
    transition: {
      custom: {
        property: "transform",
        duration: "0.5s",
        easing: "ease-in-out",
      },
    },
  });
  return (
    <Box
      ml={{ base: "30px", md: "70px" }}
      mr={{ base: "30px", md: "70px" }}
      overflowY="auto"
    >
      <Container
        maxW="container.lg"
        border="1px solid white"
        boxShadow="xl"
        my="40px"
        borderRadius="20px"
        background="rgb(250, 202, 246)"
        h="inherit "
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
              recent work
            </Heading>
          </Box>

          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            <Box w="100%" h="15vh" mb="200px">
              <Image
                border="10px solid #f7b3f7"
                src={template1}
                h="200px"
                w="300px"
                objectFit="cover"
                borderRadius="10"
                className="transitionProp"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                digital innovation website
              </Heading>
              <Button
                onClick={onOpen}
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
            <Box w="100%" h="100px">
              <Image
                border="10px solid #f7b3f7"
                src={template2}
                h="200px"
                w="300px"
                objectFit="cover"
                className="transitionProp"
                borderRadius="10"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                glint website
              </Heading>
              <Button
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
            <Box w="100%" h="100px">
              <Image
                border="10px solid #f7b3f7"
                src={template3}
                h="200px"
                className="transitionProp"
                w="300px"
                objectFit="cover"
                borderRadius="10"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                learn skating website
              </Heading>
              <Button
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
            <Box w="100%" h="20vh" mb="200px">
              <Image
                border="10px solid #f7b3f7"
                src={template4}
                h="200px"
                w="300px"
                objectFit="cover"
                className="transitionProp"
                borderRadius="10"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                digital innovation company
              </Heading>
              <Button
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
            <Box w="100%" h="100px">
              <Image
                border="10px solid #f7b3f7"
                src={template5}
                h="200px"
                className="transitionProp"
                w="300px"
                objectFit="cover"
                borderRadius="10"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                digital innovation company
              </Heading>
              <Button
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
            <Box w="100%" h="100px">
              <Image
                border="10px solid #f7b3f7"
                src={template6}
                h="200px"
                w="300px"
                objectFit="cover"
                className="transitionProp"
                borderRadius="10"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                digital innovation company
              </Heading>
              <Button
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
            <Box w="100%" h="100px" mb="200px">
              <Image
                border="10px solid #f7b3f7"
                src={template7}
                h="200px"
                w="300px"
                className="transitionProp"
                objectFit="cover"
                borderRadius="10"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                digital innovation company
              </Heading>
              <Button
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
            <Box w="100%" h="100px">
              <Image
                border="10px solid #f7b3f7"
                src={template8}
                h="200px"
                w="300px"
                objectFit="cover"
                className="transitionProp"
                borderRadius="10"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                digital innovation company
              </Heading>
              <Button
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
            <Box w="100%" h="100px">
              <Image
                border="10px solid #f7b3f7"
                src={template9}
                h="200px"
                w="300px"
                className="transitionProp"
                objectFit="cover"
                borderRadius="10"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
              >
                digital innovation company
              </Heading>
              <Button
                fontSize="18px"
                fontWeight="700"
                color="#d45366"
                bg="pink.100"
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
                border="2px solid white"
              >
                View Project
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            mt="15px"
            mr="140px"
            fontSize="15px"
            color="#d45366"
            borderRadius="full"
            bg="pink.100"
            _focus={{ outline: "0" }}
            _hover={{ bg: "pink" }}
          />
          <Container
            maxW="container.lg"
            border="1px solid white"
            boxShadow="xl"
            my="40px"
            borderRadius="20px"
            background="rgb(250, 202, 246)"
            h="inherit "
          >
            <ModalBody>
              <Image
                src={template1}
                mt="30px"
                objectFit="cover"
                borderRadius="30px"
              />
              <Heading
                as="h4"
                my="5"
                size="md"
                textTransform="capitalize"
                color="#011d48"
                fontSize="25px"
              >
                digital innovation website
              </Heading>
              <Text>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
              </Text>
              <Box d="flex" align="center" mt="8" textTransform="capitalize">
                <Heading as="h4" size="md">
                  Created -
                </Heading>
                <Text ml="1" fontWeight="normal">
                  {" "}
                  15 dec 2020
                </Text>
              </Box>
              <Box d="flex" align="center" mt="3" textTransform="capitalize">
                <Heading as="h4" size="md">
                  technologies used -
                </Heading>
                <Text ml="1" fontWeight="normal">
                  {" "}
                  react js, chakra ui
                </Text>
              </Box>
              <Box d="flex" align="center" mt="3" textTransform="capitalize">
                <Heading as="h4" size="md">
                  role -
                </Heading>
                <Text ml="1" fontWeight="normal">
                  {" "}
                  frontend, backend
                </Text>
              </Box>
              <Box d="flex" align="center" mt="3" textTransform="capitalize">
                <Heading as="h4" size="md">
                  view live -
                </Heading>
                <Text ml="1" fontWeight="normal" color="#d45366">
                  https://github.com/EmraanIqbal
                </Text>
              </Box>
            </ModalBody>

            <ModalFooter>
              {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" onClick={onOpen}>
                Secondary Action
              </Button> */}
            </ModalFooter>
          </Container>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PortfolioSection;
