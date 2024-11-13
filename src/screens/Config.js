import React, { useState } from 'react';
import { Box, HStack, Switch, Text, VStack, Icon, Center, useToast } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const Config = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(false);
    const toast = useToast();

    const toggleMainNotification = () => {
        setIsEnabled(!isEnabled);
        toast.show({
            description: `Notificaciones ${!isEnabled ? 'activadas' : 'desactivadas'}`,
            bg: !isEnabled ? "teal.500" : "red.500",
            duration: 2000,
        });

        if (isEnabled) {
            setEmailNotifications(false);
            setPushNotifications(false);
        }
    };

    return (
        <Center flex={1} bg="gray.50">
            <Box
                p="5"
                alignItems="center"
                bg="white"
                borderRadius="lg"
                shadow={1}
                width="90%"
                maxW="400px"
            >
                <VStack space={4} width="100%">
                    <Text fontSize="xl" bold color="primary.500">
                        Configuración de Notificaciones
                    </Text>

                    <HStack space={3} alignItems="center">
                        <Text fontSize="md" color="gray.700">Activar Notificaciones</Text>
                        <Switch
                            isChecked={isEnabled}
                            onToggle={toggleMainNotification}
                            colorScheme="teal"
                        />
                    </HStack>

                    <HStack alignItems="center" space={2}>
                        <Icon
                            as={Ionicons}
                            name={isEnabled ? "notifications" : "notifications-off"}
                            size="md"
                            color={isEnabled ? "teal.500" : "gray.400"}
                        />
                        <Text fontSize="md" color="gray.600">
                            Estado: {isEnabled ? "Activadas" : "Desactivadas"}
                        </Text>
                    </HStack>

                    {isEnabled && (
                        <VStack space={3} mt={4}>
                            <HStack space={3} alignItems="center">
                                <Text fontSize="md" color="gray.700">Notificaciones por Email</Text>
                                <Switch
                                    isChecked={emailNotifications}
                                    onToggle={() => setEmailNotifications(!emailNotifications)}
                                    colorScheme="blue"
                                />
                            </HStack>

                            <HStack space={3} alignItems="center">
                                <Text fontSize="md" color="gray.700">Notificaciones Push</Text>
                                <Switch
                                    isChecked={pushNotifications}
                                    onToggle={() => setPushNotifications(!pushNotifications)}
                                    colorScheme="purple"
                                />
                            </HStack>
                        </VStack>
                    )}
                </VStack>
            </Box>
        </Center>
    );
};

export default Config;
