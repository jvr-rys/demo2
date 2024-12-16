import React from 'react';
import { Image, } from 'react-native';
import {
    Box, Heading, Button, Center
} from "native-base";

const SuccessScreen = ( navigation, route ) => {
    const { name, email, phone, avatar } = route.params || {};
    return (
            <Center w="100%" bg={bgColor} flex={1}>
                <Image
                    source={
                        require('../../assets/success.png')
                    }
                    style={{ width: '100%', height: "35%", marginBottom: 0 }}
                    resizeMode="contain"
                />
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading size="lg" fontWeight="600" color={textColor}>
                        Registration successful!
                    </Heading>
                
                        <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Login')}>
                            Login
                        </Button>
                        
                </Box>
            </Center>
    );
};

export default SuccessScreen;