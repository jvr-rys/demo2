import { View, Text } from 'react-native';
import { Center, Heading, Box, Button, useColorModeValue } from 'native-base';

const MonitorScreen = () => {
    const bgColor = useColorModeValue('light.background.50', 
        'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const linkColor = useColorModeValue("indigo.500", "indigo.300"); 
    return(
        <Center flex={1} bg={bgColor}>
            <Box p={5} bg={bgColor}>
                <Heading size="lg" mb={4} color={textColor}>
                    Monitor screen
                    <Text color={textColor}> Build beautiful UIs</Text>
                </Heading>
                <Text mt="3" fontWeight="medium" fontSize="md" color={textColor}>
                    NativeBase is simple, blah, blah blah
                </Text>
                <Button mt="5" colorScheme="indigo">
                    Get Started
                </Button>
            </Box>
        </Center>
    );
}

export default MonitorScreen;