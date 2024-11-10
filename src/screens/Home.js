import { View, Text } from 'react-native';
import { Center, Box } from 'native-base';

const HomeScreen = () => {
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Example/>
        </View>
    );
}

function Example() {
    return (
        <Center flex={1}>
            <Box
            bg="primary.500"
            _text={{
                color: "black",
                fontWeight: "bold",
                fontSize: 20,
            }}
            height={200}
            width={{base: 200, lg: 250}}
            display="flex"
            alignItems="center"
            justifyContent="cneter"
            borderRadius={10}
            >
                HomeScreen
            </Box>
        </Center>
    )
}

export default HomeScreen;