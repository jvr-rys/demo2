import React, { useState, useEffect } from 'react';
import { 
  Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon, Progress, Skeleton, Spinner, Alert, useToast 
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const ProfileScreen = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const toast = useToast();
  const { colorMode } = useColorMode();

  useEffect(() => {
    const loadUserData = async () => {
      setLoading(true);
      setProgress(20);

      setTimeout(() => {
        setProgress(60);
      }, 1000);

      setTimeout(() => {
        setProgress(100);
      }, 2000);

      setTimeout(() => {
        setUserData({
          name: 'Javier Reyes',
          email: 'javier@example.com',
          bio: 'Software Engineer apasionado por React Native y diseño UI.',
          avatar: 'https://via.placeholder.com/150',
        });
        setLoading(false);
        toast.show({
          title: "Datos cargados",
          description: "Los datos del perfil se han cargado correctamente.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }, 5000);
    };

    loadUserData();
  }, []);

  return (
    <Center flex={1} px={4} bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.800'}>
      <VStack space={4} w="100%" maxWidth="400px">
        {showAlert && (
          <Alert w="100%" status="error" colorScheme="error" onClose={() => setShowAlert(false)}>
            <Alert.Icon />
            <Text color="error.700">Hubo un error al cargar los datos</Text>
          </Alert>
        )}

        {loading ? (
          <>
            <Text>Cargando perfil del usuario...</Text>
            <Progress value={progress} colorScheme="blue" />
            <Skeleton.Text lines={3} mt={4} />
            <Skeleton mt={2} h="20" />
            <Spinner size="lg" color="blue.500" mt={4} />
          </>
        ) : (
          <Box
            bg={colorMode === 'light' ? 'white' : 'coolGray.700'}
            rounded="lg"
            shadow={6}
            p={6}
          >
            <VStack space={4} alignItems="center">
              <Avatar size="xl" source={{ uri: userData.avatar }} />
              <Text fontSize="2xl" fontWeight="bold">{userData.name}</Text>
              <Text fontSize="md" color="gray.500">{userData.email}</Text>
              <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'} italic>
                {userData.bio}
              </Text>
            </VStack>

            <Divider my={4} />

            <HStack space={6} justifyContent="center" alignItems="center">
              <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-linkedin" size="sm" />} colorScheme="blue">
                LinkedIn
              </Button>
              <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-github" size="sm" />} colorScheme="dark">
                GitHub
              </Button>
              <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="mail-outline" size="sm" />} colorScheme="red">
                Email
              </Button>
            </HStack>
          </Box>
        )}

        {!loading && (
          <Button colorScheme="danger" onPress={() => setShowAlert(true)}>
            Simular error
          </Button>
        )}
      </VStack>
    </Center>
  );
};

export default ProfileScreen;
