import { View } from 'react-native';
import { Center, Text, Flex, Spacer, useColorModeValue } from 'native-base';

const ReportScreen = () => {
    const bgColor = useColorModeValue('light.background.50', 
        'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const linkColor = useColorModeValue("indigo.500", "indigo.300"); 
    return(
        <Center flex={1} bg={bgColor}>
        <Flex h={40} alignItems="center">
            <Center size={16} bg="primary.500" rounded="ms" _text={{color:"warmGray.50", fontWeight:"medium"}}>
                Box 1
            </Center>
            <Spacer/>
            <Center size={16} bg="primary.500" rounded="ms" _text={{color:"warmGray.50", fontWeight:"medium"}}>
                Box 2
            </Center>
        </Flex>
        </Center>
    );
}

export default ReportScreen;