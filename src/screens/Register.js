import React, { useState } from 'react';
import { Text } from 'react-native';
import { NativeBaseProvider, Box, Heading, VStack, FormControl, HStack, Input, Button, Center } from "native-base";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleRegister = async () => {
        if (password === confirmPassword) {
            try {
                navigation.navigate('Success', {
                    name: name,
                    email: email,
                    password: password,
                  });
            } catch (error) {
                alert(`Error: ${error.message}`);
            }
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <Center w="100%">
            <Image
                    source={
                        require('../../assets/splash.png')
                    }
                    style={{ width: '100%', height: "35%", marginBottom: 0 }}
                    resizeMode="contain"
                />
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Welcome
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Register to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input value={email} onChangeText={setEmail} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" value={password} onChangeText={setPassword} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input type="password" value={confirmPassword} onChangeText={setConfirmPassword} />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={handleRegister}>
                        Register
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600">
                            Already have an account? 
                            <Button variant="link" colorScheme="indigo" onPress={() => navigation.navigate('Login')}>
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
