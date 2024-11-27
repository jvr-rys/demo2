import React, { useState } from 'react';
import {
    NativeBaseProvider,
    Box,
    VStack,
    HStack,
    Text,
    Avatar,
    Button,
    Input,
    Icon,
    useToast,
    Image,
    StatusBar,
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    const [avatarImage, setAvatarImage] = useState(null);
    const [userName, setUserName] = useState('');
    const [userInitials, setUserInitials] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const toast = useToast();

    // Manejar selección de imagen para Avatar
    const pickAvatarImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.canceled) {
            setAvatarImage(result.assets[0].uri);
            toast.show({ title: 'Avatar actualizado', status: 'success' });
        }
    };

    // Manejar selección de imagen general
    const pickUploadedImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.canceled) {
            setUploadedImage(result.assets[0].uri);
            toast.show({ title: 'Imagen cargada exitosamente', status: 'success' });
        }
    };

    // Guardar iniciales si no se subió imagen para Avatar
    const handleSaveAvatar = () => {
        if (!avatarImage && userName) {
            const initials = userName
                .split(' ')
                .map((word) => word[0])
                .join('')
                .toUpperCase();
            setUserInitials(initials);
            toast.show({ title: 'Iniciales generadas', status: 'info' });
        } else {
            toast.show({ title: 'Avatar guardado', status: 'success' });
        }
    };

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" />
            <Box safeArea p={4} flex={1} bg="coolGray.100">
                <VStack space={4}>
                    {/* Encabezado */}
                    <HStack justifyContent="center" alignItems="center" space={3}>
                        <Icon as={MaterialIcons} name="person" size="lg" color="emerald.600" />
                        <Text fontSize="2xl" fontWeight="bold" color="emerald.600">
                            Carga de Avatar
                        </Text>
                    </HStack>

                    {/* Avatar */}
                    <VStack space={3} alignItems="center">
                        <Text fontSize="lg">Sube tu avatar o escribe tu nombre:</Text>
                        {avatarImage ? (
                            <Image
                                source={{ uri: avatarImage }}
                                alt="Avatar"
                                size="xl"
                                borderRadius="full"
                            />
                        ) : (
                            <Avatar size="xl" bg="emerald.600">
                                {userInitials || 'NA'}
                            </Avatar>
                        )}
                        <Input
                            placeholder="Escribe tu nombre"
                            value={userName}
                            onChangeText={setUserName}
                            mt={2}
                            w="80%"
                            InputLeftElement={
                                <Icon as={Ionicons} name="person-outline" size="sm" ml={2} />
                            }
                        />
                        <HStack space={3} justifyContent="center">
                            <Button
                                onPress={pickAvatarImage}
                                colorScheme="emerald"
                                leftIcon={<Icon as={MaterialIcons} name="photo-camera" size="sm" />}
                            >
                                Subir Avatar
                            </Button>
                            <Button
                                onPress={handleSaveAvatar}
                                colorScheme="blue"
                                leftIcon={<Icon as={Ionicons} name="save-outline" size="sm" />}
                            >
                                Guardar
                            </Button>
                        </HStack>
                    </VStack>

                    {/* Nueva sección para subir imagen adicional */}
                    <VStack mt={8} space={4} alignItems="center">
                        <HStack alignItems="center" space={2}>
                            <Icon as={Ionicons} name="images-outline" size="lg" color="cyan.600" />
                            <Text fontSize="lg">Sube otra imagen para mostrarla:</Text>
                        </HStack>
                        <Button
                            onPress={pickUploadedImage}
                            colorScheme="cyan"
                            leftIcon={<Icon as={MaterialIcons} name="image" size="sm" />}
                        >
                            Subir Imagen
                        </Button>
                        {uploadedImage && (
                            <Image
                                source={{ uri: uploadedImage }}
                                alt="Imagen subida"
                                size="2xl"
                                borderRadius={10}
                                mt={4}
                            />
                        )}
                    </VStack>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
}

export default ProfileScreen;