// import React from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/hooks";
// import PortfolioSection from "../PortfolioSection";

// const Modal = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Modal isOpen={isOpen} onClose={onClose} size="full">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalCloseButton
//             mt="15px"
//             mr="140px"
//             fontSize="15px"
//             color="#d45366"
//             borderRadius="full"
//             bg="pink.100"
//             _focus={{ outline: "0" }}
//             _hover={{ bg: "pink" }}
//           />
//           <Container
//             maxW="container.lg"
//             border="1px solid white"
//             boxShadow="xl"
//             my="40px"
//             borderRadius="20px"
//             background="rgb(250, 202, 246)"
//             h="inherit "
//           >
//             <ModalBody>
//               <Image
//                 src={template1}
//                 mt="30px"
//                 objectFit="cover"
//                 borderRadius="30px"
//               />
//               <Heading
//                 as="h4"
//                 my="5"
//                 size="md"
//                 textTransform="capitalize"
//                 color="#011d48"
//                 fontSize="25px"
//               >
//                 digital innovation website
//               </Heading>
//               <Text>
//                 In publishing and graphic design, Lorem ipsum is a placeholder
//                 text commonly used to demonstrate the visual form of a document
//                 or a typeface without relying on meaningful content. Lorem ipsum
//                 may be used as a placeholder before final copy is available.In
//                 publishing and graphic design, Lorem ipsum is a placeholder text
//                 commonly used to demonstrate the visual form of a document or a
//                 typeface without relying on meaningful content. Lorem ipsum may
//                 be used as a placeholder before final copy is available.
//               </Text>
//               <Box d="flex" align="center" mt="8" textTransform="capitalize">
//                 <Heading as="h4" size="md">
//                   Created -
//                 </Heading>
//                 <Text ml="1" fontWeight="normal">
//                   {" "}
//                   15 dec 2020
//                 </Text>
//               </Box>
//               <Box d="flex" align="center" mt="3" textTransform="capitalize">
//                 <Heading as="h4" size="md">
//                   technologies used -
//                 </Heading>
//                 <Text ml="1" fontWeight="normal">
//                   {" "}
//                   react js, chakra ui
//                 </Text>
//               </Box>
//               <Box d="flex" align="center" mt="3" textTransform="capitalize">
//                 <Heading as="h4" size="md">
//                   role -
//                 </Heading>
//                 <Text ml="1" fontWeight="normal">
//                   {" "}
//                   frontend, backend
//                 </Text>
//               </Box>
//               <Box d="flex" align="center" mt="3" textTransform="capitalize">
//                 <Heading as="h4" size="md">
//                   view live -
//                 </Heading>
//                 <Text ml="1" fontWeight="normal" color="#d45366">
//                   https://github.com/EmraanIqbal
//                 </Text>
//               </Box>
//             </ModalBody>

//             <ModalFooter>
//               {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button variant="ghost" onClick={onOpen}>
//                 Secondary Action
//               </Button> */}
//             </ModalFooter>
//           </Container>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default Modal;
