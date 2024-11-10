import { View, Text } from 'react-native';
import { Center, Box, useColorModeValue } from 'native-base';

const HomeScreen = () => {

    const bgColor = useColorModeValue('light.background.50', 
        'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const linkColor = useColorModeValue("indigo.500", "indigo.300"); 
    return (
        <Center flex={1} bg={bgColor}>
            <Box
            bg='primary.100'
            _text={{color: "black", fontWeight: "bold", fontSize: 20}}
            height={200}
            width={{base: 200, lg: 250}}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={10}
            >
                HomeScreen
            </Box>
        </Center>
    )
}


export default HomeScreen;