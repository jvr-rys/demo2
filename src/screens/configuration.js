import { Button, View } from 'react-native';

function ConfigScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Go to homescreen"
            />
        </View>
    );
}

export default ConfigScreen;