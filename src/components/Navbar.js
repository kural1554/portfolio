import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Box, HStack, Text, IconButton, Drawer, DrawerBody, DrawerHeader, 
  DrawerOverlay, DrawerContent, DrawerCloseButton, useBreakpointValue, VStack 
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionText = motion(Text); // Animated Text Component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="nav" bg="gray.800" py={3} px={6}>
      {isMobile ? (
        // Mobile Navbar
        <>
          <HStack justify="space-between">
            <Text color="white" fontSize="xl" fontWeight="bold">
              My Portfolio
            </Text>
            <IconButton
              icon={<HamburgerIcon />}
              color="white"
              bg="transparent"
              _hover={{ bg: "gray.700" }}
              onClick={() => setIsOpen(true)}
            />
          </HStack>

          {/* Mobile Drawer */}
          <Drawer placement="right" onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg="gray.800">
              <DrawerCloseButton color="white" />
              <DrawerHeader color="white" borderBottomWidth="1px">Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="start">
                  {["Home", "About", "Projects", "Contact"].map((item, index) => (
                    <MotionText
                      key={index}
                      as={Link}
                      to={`/${item.toLowerCase()}`}
                      color="white"
                      fontSize="lg"
                      whileHover={{ scale: 1.1, color: "#4299E1" }} // Hover Animation
                      transition={{ duration: 0.3 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </MotionText>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        // Desktop Navbar
        <HStack as="ul" spacing={6} justify="center" listStyleType="none">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <MotionText
              key={index}
              as={Link}
              to={`/${item.toLowerCase()}`}
              color="white"
              fontSize="lg"
              whileHover={{ scale: 1.1, color: "#00F0FF" }} // Hover Animation
              transition={{ duration: 0.2 }}
            >
              {item}
            </MotionText>
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default Navbar;
