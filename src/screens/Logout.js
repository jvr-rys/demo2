import { View, Text } from 'react-native';
import { Modal } from 'native-base';

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(null);

    const showModal = (modal) => setModalVisible(modal);
    const closeModal = () => setModalVisible(null);

    const mode = true;
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Modal isOpen={modalVisible === true} onClose={closeModal}>
                <Modal.Content>
                    <Modal.Header alignSelf='center'>Logout</Modal.Header>
                    <Modal.Body>
                        <Text alignSelf='center'>You are about to logout.</Text>
                        <Text alignSelf='center'>Continue?</Text>
                    </Modal.Body>
                    <Modal.Footer alignSelf='center'>
                        <Button onPress={() => navigation.navigate('Login')} marginRight={8} bg='danger.400'>Logout</Button>
                        <Button onPress={closeModal} marginLeft={8}>Cancel</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </View>
    );
}

export default HomeScreen;