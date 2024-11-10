import { View } from 'react-native';
import { Center, Text, Flex, Spacer } from 'native-base';

const ReportScreen = () => {
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Example/>
        </View>
    );
}

const Example = () => {
    return(
        <Flex h={40} alignItems="center">
            <Center size={16} bg="primary.500" _dark={{bg: "dark.background.600"}} rounded="ms" _text={{color:"warmGray.50", fontWeight:"medium"}}>
                Box 1
            </Center>
            <Spacer/>
            <Center size={16} bg="primary.500" _dark={{bg: "dark.background.600"}} rounded="ms" _text={{color:"warmGray.50", fontWeight:"medium"}}>
                Box 2
            </Center>
        </Flex>
    );
};

export default ReportScreen;