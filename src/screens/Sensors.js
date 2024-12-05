import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Center, Box, Text, Button, HStack, useColorModeValue } from 'native-base';

const SensorsScreen = ({ navigation }) => {
    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('black', 'white');
    const screenWidth = Dimensions.get('window').width;

    return (
        <Center flex={1} bg={bgColor}>
            <Box
                bg="black"
                width="40%"
                p={4}
                borderRadius={10}
                borderColor="coolGray.400"
                justifyContent="center"
                alignItems="center"
                mb={2}
                position="absolute"
                top={0}
                height="5%"
                py={4}
                px={4}
            >
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="white"
                    letterSpacing={2}
                    textAlign="center"
                >
                    Sensors
                </Text>
            </Box>
            <HStack w="90%" mt={2} justifyContent="center" space={6}>
                <Box
                    bg="white"
                    borderWidth={1}
                    borderColor="coolGray.300"
                    borderRadius={8}
                    p={4}
                    shadow={2}
                    flex={1}
                >
                    <Text fontSize="md" fontWeight="bold" mb={2} color="black">
                        Lab-1
                    </Text>
                    <Text fontSize="sm" color="black">Online</Text>
                    <Text fontSize="sm" color="black">Alarm: On</Text>
                    <Text fontSize="sm" color="black">Last Update: 1s</Text>
                </Box>
            </HStack>
        </Center>
    );
};

export default SensorsScreen;
