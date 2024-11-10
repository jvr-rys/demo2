import { View, Text } from 'react-native';
import { Center, Heading, NBText, Button, Container } from 'native-base';

const MonitorScreen = () => {
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Example/>
        </View>
    );
}

function Example() {
    return(
        <Center flex={1}>
            <Container p={5}>
                <Heading size="lg" mb={4}>
                    Monitor screen
                    <NBText color="indigo.500"> Build beautiful UIs</NBText>
                </Heading>
                <NBText mt="3" fontWeight="medium" fontSize="md">
                    NativeBase is simple, blah, blah blah
                </NBText>
                <Button mt="5" colorScheme="indigo">
                    Get Started
                </Button>
            </Container>
        </Center>
    );
}

export default MonitorScreen;