import React from 'react';
import { Dimensions } from 'react-native';
import { Center, Box, Text, Button, HStack, useColorModeValue, ScrollView } from 'native-base';
import { LineChart, PieChart, StackedBarChart } from 'react-native-chart-kit';

const MonitorScreen = ({ navigation }) => {
    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const screenWidth = Dimensions.get('window').width;

    return (
        <ScrollView flex={1} bg={bgColor}>
            <Center>
                {/* Encabezado */}
                <Box
                    bg="primary.400"
                    w="100%"
                    height="25%"
                    justifyContent="flex-end"
                    py={4}
                    px={4}
                >
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                        letterSpacing={6}
                    >
                        Monitor
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
                </Box>

                {/* Gráfico de barras apiladas */}
                <Box
                    alignItems="center"
                    mt={4}
                    w="90%"
                >
                    <StackedBarChart
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            legend: ['CO', 'H2', 'CH4', 'CO2'],
                            data: [
                                [9, 15, 31, 45],
                                [12, 20, 35, 30],
                                [15, 25, 40, 35],
                                [10, 18, 25, 20],
                                [14, 22, 33, 28],
                            ],
                            barColors: ['#d32f2f', '#1976d2', '#388e3c', '#fbc02d'],
                        }}
                        width={screenWidth * 0.9}
                        height={300}
                        chartConfig={{
                            backgroundColor: 'transparent',
                            backgroundGradientFrom: 'white',
                            backgroundGradientTo: 'white',
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: () => 'black',
                        }}
                        backgroundColor="transparent"
                    />
                </Box>

                {/* Gráficos de torta y línea */}
                <HStack space={4} w="90%" mt={4}>
                    {/* Gráfico de torta */}
                    <Box
                        bg="white"
                        borderWidth={1}
                        borderColor="coolGray.300"
                        borderRadius={8}
                        p={4}
                        shadow={2}
                        flex={1}
                    >
                        <PieChart
                            data={[
                                { name: 'CO', population: 9, color: 'red', legendFontColor: 'black', legendFontSize: 12 },
                                { name: 'H2', population: 15, color: 'blue', legendFontColor: 'black', legendFontSize: 12 },
                                { name: 'CH4', population: 31, color: 'green', legendFontColor: 'black', legendFontSize: 12 },
                                { name: 'CO2', population: 45, color: 'yellow', legendFontColor: 'black', legendFontSize: 12 },
                            ]}
                            width={screenWidth * 0.4}
                            height={150}
                            chartConfig={{
                                color: () => `rgba(0, 0, 0, 1)`,
                            }}
                            accessor="population"
                            backgroundColor="transparent"
                        />
                    </Box>

                    {/* Gráfico de línea */}
                    <Box
                        bg="white"
                        borderWidth={1}
                        borderColor="coolGray.300"
                        borderRadius={8}
                        p={4}
                        shadow={2}
                        flex={1}
                    >
                        <LineChart
                            data={{
                                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                                datasets: [
                                    {
                                        data: [20, 45, 28, 80, 99],
                                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                                        strokeWidth: 2,
                                    },
                                ],
                            }}
                            width={screenWidth * 0.4}
                            height={160}
                            chartConfig={{
                                backgroundColor: 'transparent',
                                backgroundGradientFrom: 'white',
                                backgroundGradientTo: 'white',
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                labelColor: () => 'black',
                            }}
                            backgroundColor="transparent"
                            bezier
                        />
                    </Box>
                </HStack>
            </Center>
        </ScrollView>
    );
};

export default MonitorScreen;
