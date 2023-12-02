import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const avatarUrl = "https://i.pravatar.cc/150?img=7";

const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
        <VStack spacing={4} alignItems="center">
            <Avatar size="xl" src={avatarUrl} alt="Pete's Avatar" />
            <Heading as="h1" size="xl" color="white">
                {greeting}
            </Heading>
            <Heading as="h2" size="lg" color="white">
                {bio1}
            </Heading>
            <Heading as="h2" size="lg" color="white">
                {bio2}
            </Heading>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;
