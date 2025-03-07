import { Box, Heading, Text, Button, VStack, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Me from "../assets/img/me.jpg"; // Ensure the correct path

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const Home = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      py={20}
      px={6}
      maxW="1200px"
      mx="auto"
    >
      <HStack spacing={10} align="center" flexDirection={{ base: "column", md: "row" }}>
        
        {/* Left Side - Text & Buttons */}
        <VStack align="start" spacing={6} flex={1}>
          <Heading size="2xl" color="blue">
            FULL STACK DEVELOPER
          </Heading>
          <Text fontSize="lg" color="block">
            Discover my latest projects, skills, and achievements.
          </Text>

          <HStack spacing={4}>
            <MotionButton
              as={Link}
              to="/projects"
              colorScheme="blue"
              size="lg"
              whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </MotionButton>

            <MotionButton
              as={Link}
              to="/contact"
              variant="outline"
              colorScheme="blue"
              size="lg"
              whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </MotionButton>
          </HStack>
        </VStack>

        {/* Right Side - Image with Hover Effect */}
        <MotionImage
          src={Me}  
          alt="Portfolio Image"
          boxSize={{ base: "300px", md: "400px" }}
          borderRadius="lg"
          flex={1}
          whileHover={{ scale: 1.1, rotate: 5 }} // Rotate and scale on hover
          transition={{ duration: 0.4 }}
        />
      </HStack>
    </MotionBox>
  );
};

export default Home;
