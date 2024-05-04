import React from "react";
import { Box, Container, VStack, Text, Button, Input, Stack, Avatar, Heading, IconButton, useColorMode, useColorModeValue, Flex, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaUserCircle, FaPlus } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg={bgColor} minH="100vh">
        <Flex p={4} borderBottom="1px" borderColor="gray.200">
          <Heading size="md" color={textColor}>
            MySNS
          </Heading>
          <Spacer />
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound="true" size="sm" onClick={toggleColorMode} aria-label="Toggle theme" />
          <IconButton ml={2} icon={<FaUserCircle />} isRound="true" size="sm" aria-label="User profile" />
        </Flex>
        <VStack spacing={4} p={4}>
          <Stack direction="row" w="full" spacing={4}>
            <Input placeholder="What's on your mind?" />
            <Button leftIcon={<FaPlus />} colorScheme="blue">
              Post
            </Button>
          </Stack>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Flex>
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNDc4MjkyNHww&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box ml="3">
                  <Text fontWeight="bold">John Doe</Text>
                  <Text fontSize="sm">Just now</Text>
                </Box>
              </Flex>
              <Text mt={4}>Hello, this is my first post on MySNS!</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Flex>
                <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNDc4MjkyNHww&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box ml="3">
                  <Text fontWeight="bold">Jane Smith</Text>
                  <Text fontSize="sm">5 minutes ago</Text>
                </Box>
              </Flex>
              <Text mt={4}>Loving this new app! #excited</Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
