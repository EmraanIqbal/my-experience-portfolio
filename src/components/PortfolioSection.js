import { Box, Container, Heading } from "@chakra-ui/layout";
import React from "react";

const PortfolioSection = () => {
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
        // mb="40px"
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
              recent work
            </Heading>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
