import React, { useContext } from 'react';
import { Text } from 'react-native';
import { NativeBaseProvider, Box, Heading, VStack, FormControl, HStack, Input, Button, Link, Center } from "native-base";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();
    return (
    <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Welcome
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Sign in to continue!
            </Heading>
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password"/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input type="password"/>
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={()=>navigation.navigate('Login')}>
                    Register 
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600">
                        Already hace an account? 
                        <Button variant="link" colorScheme="indigo" onPress={()=>navigation.navigate('Login')}>
                        Login
                        </Button>
                    </Text>
                </HStack>
            </VStack>
        </Box>
    </Center>
);
};

export default RegisterScreen;