import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import React from "react";

const FolderSection = () => {
  return (
    <Box>
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
          <Heading
            textAlign="center"
            pt="70px"
            pb="50px"
            w="100%"
            textTransform="capitalize"
            fontSize="40px"
            color="#011d48"
          >
            Contact me
          </Heading>
        </Box>
        <Box d="flex" justifyContent="space-between">
          <Box w="47%" ml="20px">
            <Stack spacing="4">
              <Input borderRadius="full" placeholder="Name" bg="pink.50" />
              <Input borderRadius="full" placeholder="Email" bg="pink.50" />
              <Input borderRadius="full" placeholder="Subject" bg="pink.50" />
              <Input
                borderRadius="full"
                placeholder="Message"
                p="10"
                bg="pink.50"
              />
              <Button
                w="30%"
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
                mb="50px"
              >
                Send message
              </Button>
            </Stack>
          </Box>
          <Box w="47%">
            <Heading as="h5" size="sm">
              Email
            </Heading>
            <Text mt="1" mb="7">
              se.imraniqbal@gmail.com
            </Text>

            <Heading as="h5" size="sm">
              Phone
            </Heading>
            <Text mt="1" mb="7">
              0312 0170293
            </Text>

            <Heading as="h5" size="sm">
              Follow Me
            </Heading>
            <Text mt="1" mb="7">
              Social media icons
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FolderSection;
