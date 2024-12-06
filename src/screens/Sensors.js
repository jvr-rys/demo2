import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Center, Box, Text, Button, HStack, useColorModeValue, Image } from 'native-base';

const SensorsScreen = ({ navigation }) => {
    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const screenWidth = Dimensions.get('window').width;

    return (

        <Center flex={1} bg={bgColor}>
            <Button variant='ghost' _text={{
                color: textColor,
                fontSize: '24px',
                fontWeight: 'bold',
            }} size='lg'
                position='absolute' alignSelf='flex-start'
                top={1} left={1}
                onPress={() => navigation.navigate('Home')}>
                {'<'}
            </Button>
            <Box
                bg="black"
                width="40%"
                p={4}
                borderRadius={10}
                borderColor="coolGray.400"
                justifyContent="center"
                alignItems="center"
                mt={4}
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
            <HStack w="90%" mt={6} alignContent="center" space={1}>
                <Box
                    bg="white"
                    borderWidth={1}
                    borderColor="coolGray.300"
                    borderRadius={8}
                    p={4}
                    shadow={2}
                    flex={1}
                >
                    <Text fontSize="md" fontWeight="bold" mb={2} color="black" alignSelf='center'>
                        Lab-1
                    </Text>
                    <Image
                        source={require('../../assets/Sensor.png')}
                        style={{ width: '40%', height: 300, marginBottom: 2, alignSelf: 'center' }}
                        resizeMode="contain"
                    />
                    <Box
                        bg="white"
                        borderColor={''}
                        p={4}
                        flex={1}
                        left={4}
                        containerStyle={{ shadowColor: 'transparent', elevation: 0 }}>
                        <Text fontSize="sm" color="black">Status:   </Text>
                        <Text fontSize="sm" color="black">Alarm:    </Text>
                        <Text fontSize="sm" color="black">Last Update:  </Text>
                    </Box>
                </Box>
            </HStack>
        </Center>
    );
};

export default SensorsScreen;
