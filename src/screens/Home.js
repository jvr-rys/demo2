import React from 'react';
import { Dimensions } from 'react-native';
import { Center, Box, Text, Button, HStack, useColorModeValue } from 'native-base';
import { PieChart } from 'react-native-chart-kit';

const HomeScreen = () => {
    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('black', 'white');
    const screenWidth = Dimensions.get('window').width;

    return (
        <Center flex={1} bg={bgColor}>
            <Box
                bg="blue.500"
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="40%"
                justifyContent="flex-end"
                py={4}
                px={4}
            >
                <Text fontSize="xl" fontWeight="bold" color="white" textAlign="center">
                    Activity
                </Text>
                <HStack justifyContent="center" space={4} mt={2}>
                    {['Day', 'Week', 'Month', 'Year'].map((label) => (
                        <Button
                            key={label}
                            variant="outline"
                            borderColor="white"
                            _text={{ color: 'white' }}
                            size="sm"
                        >
                            {label}
                        </Button>
                    ))}
                </HStack>
                <Box alignItems="center">
                    <PieChart
                        data={[
                            { name: 'CO', population: 9, color: 'red', legendFontColor: 'white', legendFontSize: 12 },
                            { name: 'H2', population: 15, color: 'blue', legendFontColor: 'white', legendFontSize: 12 },
                            { name: 'CH4', population: 31, color: 'green', legendFontColor: 'white', legendFontSize: 12 },
                            { name: 'CO2', population: 45, color: 'yellow', legendFontColor: 'white', legendFontSize: 12 },
                        ]}
                        width={screenWidth * 0.9}
                        height={200}
                        chartConfig={{
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                    />
                </Box>
            </Box>
            <Box
                bg="black"
                width="40%"
                p={4}
                borderRadius={10}
                borderColor="coolGray.400"
                height="5%"
                justifyContent="center"
                alignItems="center" 
                mb={2}
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
            <HStack space={4} w="90%" mt={2}>
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
                        Lab-2
                    </Text>
                    <Text fontSize="sm" color="black">Online</Text>
                    <Text fontSize="sm" color="black">Alarm: Off</Text>
                    <Text fontSize="sm" color="black">Last Update: 1m</Text>
                </Box>
            </HStack>
        </Center>
    );
};

export default HomeScreen;
