import { View, Text } from 'react-native';
import { Center, Box, useColorModeValue, Button } from 'native-base';

const HomeScreen = ({ navigation }) => {

    const bgColor = useColorModeValue('light.background.50',
        'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const linkColor = useColorModeValue("indigo.500", "indigo.300");
    return (
        <Center flex={1} bg={bgColor}>
            <Box
                bg='primary.100'
                _text={{ color: "black", fontWeight: "bold", fontSize: 20 }}
                height={200}
                width={{ base: 200, lg: 250 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={10}
            >
                HomeScreen
            </Box>
            <Button
                onPress={() => navigation.navigate('Profile')}
                size="lg"
                width="80%"
                _text={{ fontWeight: 'bold' }}
                bg="primary.500"
                _pressed={{ bg: 'primary.600' }}
                shadow={3}
            >
                Perfil
            </Button>
            <Button
                onPress={() => navigation.navigate('Config')}
                size="lg"
                width="80%"
                _text={{ fontWeight: 'bold' }}
                bg="secondary.500"
                _pressed={{ bg: 'secondary.600' }}
                shadow={3}
            >
                Notificaciones
            </Button>

            <Button
                onPress={() => navigation.navigate('ProfileSummary')}
                size="lg"
                width="80%"
                _text={{ fontWeight: 'bold' }}
                bg="secondary.500"
                _pressed={{ bg: 'secondary.600' }}
                shadow={3}
            >
                Resumen del Perfil
            </Button>
        </Center>
    )
}


export default HomeScreen;