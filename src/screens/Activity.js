import React from 'react';
import { Dimensions } from 'react-native';
import { Center, Box, Text, Button, HStack, useColorModeValue } from 'native-base';
import { BarChart, PieChart } from 'react-native-chart-kit';

const ActivityScreen = ({ navigation }) => {
    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const screenWidth = Dimensions.get('window').width;

    return (
        <Center flex={1} bg={bgColor}>
            <Box
                bg="primary.400"
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="40%"
                justifyContent="flex-end"
                py={4}
                px={4}
            >
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
                <Text fontSize="3xl" fontWeight="bold" color="white" textAlign="center" letterSpacing={6}>
                    Activity
                </Text>
                <HStack justifyContent="center" space={6} mt={2}>
                    {['Day', 'Week', 'Month', 'Year'].map((label) => (
                        <Button
                            key={label}
                            variant="ghost"
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
            <HStack space={4} w="90%" mt="40%" justifyContent="center">
                <Box
                    bg={bgColor}
                    borderWidth={1}
                    borderColor="coolGray.300"
                    borderRadius={8}
                    p={4}
                    shadow={2}
                    flex={1}
                >
                    <Text fontSize="md" fontWeight="bold" mb={2} color={textColor} alignSelf='flex-end'>
                        Filter
                    </Text>
                    <BarChart
                        data={{
                            labels: ['CO', 'H2', 'CH4', 'CO2'],
                            datasets: [
                                {
                                    data: [9, 15, 31, 45],
                                },
                            ],
                        }}
                        width={screenWidth * 0.8}
                        height={220}
                        chartConfig={{
                            backgroundGradientFrom: "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0.5,
                            color: (opacity = 0) => `rgba(26, 255, 146, ${opacity})`,
                            strokeWidth: 2,
                            barPercentage: 0.5,
                            useShadowColorFromDataset: false
                        }}
                        style={{
                            borderRadius: 8,
                        }}
                        fromZero={true}
                        horizontal={true}
                        withInnerLines={false}
                    />
                </Box>
            </HStack>
        </Center>
    );
};

export default ActivityScreen;
