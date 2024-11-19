import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider, Box, Button, HStack, 
    StatusBar, Center, Menu, Pressable, HamburgerIcon, Divider,
    Modal, FormControl, Input, AlertDialog, Popover } from 'native-base';

const AlertExample = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);
  
    return (
      <Center>
        <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
          Eliminar cliente
        </Button>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Eliminar cliente</AlertDialog.Header>
            <AlertDialog.Body>
            Esto eliminará todos los datos relacionados con Alex. 
            Esta acción no se puede revertir.
            Los datos eliminados no se pueden recuperar.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                  Cancelar
                </Button>
                <Button colorScheme="danger" onPress={onClose}>
                  Eliminar
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    );
  };

  const MenuExample = () => {
    return (
      
        <Menu w="190" trigger={triggerProps => {
              return (<Pressable accessibilityLabel="More options menu" {...triggerProps}
                  bg="green.500"  p={3} borderRadius="4">
                  <HamburgerIcon color="white" /> </Pressable>); }}>
              
              {/*---------PRIMER MENÚ--------------*/}
              {/* 
              <Menu.Item>Opcion 1</Menu.Item>
              <Menu.Item>Opcion 2</Menu.Item>
              <Menu.Item>Opcion 3</Menu.Item>
              <Menu.Item isDisabled>Opcion 4</Menu.Item> */}
          
              {/*---------SEGUNDO MENÚ--------------*/}
              {/*   */}
                  <Menu.Group title="Grupo 1">
                      <Menu.Item>Opcion 1</Menu.Item>
                      <Menu.Item>Opcion 2</Menu.Item>
                  </Menu.Group>
                      <Divider mt="3" w="100%" />
                  <Menu.Group title="Grupo 2">
                      <Menu.Item>Opcion 1</Menu.Item>
                      <Menu.Item>Opcion 2</Menu.Item>
                  </Menu.Group>  
             
  
              {/*---------TERCER MENÚ--------------*/}
              {/* 
                  <Menu.OptionGroup defaultValue="Op1" title="Grupo 1" type="radio">
                      <Menu.ItemOption value="Op1">Opcion 1</Menu.ItemOption>
                      <Menu.ItemOption value="Op2">Opcion 2</Menu.ItemOption>
                  </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                  <Menu.OptionGroup title="Grupo 2" type="checkbox">
                      <Menu.ItemOption value="Op1">Opcion 1</Menu.ItemOption>
                      <Menu.ItemOption value="Op2">Opcion 2</Menu.ItemOption>
                  </Menu.OptionGroup>
              */}
        </Menu>
      
    );
  };

  const ModalExample = () => {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <Center>
        <Button onPress={() => setShowModal(true)}>Contactanos</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Contactanos</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Nombre</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Correo</FormControl.Label>
                <Input />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button colorScheme="blueGray" onPress={() => setShowModal(false)}>
                  Cancelar
                </Button>
                <Button onPress={() => setShowModal(false)}>
                  Guardar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    );
  };

  const PopoverExample = () => {
    return <Box w="100%" alignItems="center">
        <Popover trigger={triggerProps => {
        return <Button {...triggerProps} colorScheme="amber">
                Eliminar cliente
              </Button>;
      }}>
          <Popover.Content accessibilityLabel="Delete Customerd" w="56">
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Eliminar cliente</Popover.Header>
            <Popover.Body>
              Esto eliminará todos los datos relacionados con Alex. 
              Esta acción no se puede revertir.
              Los datos eliminados no se pueden recuperar.
            </Popover.Body>
            <Popover.Footer justifyContent="flex-end">
              <Button.Group space={2}>
                <Button colorScheme="coolGray">
                  Cancelar
                </Button>
                <Button colorScheme="danger">Eliminar</Button>
              </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Box>;
  
};

const MonitorScreen = () => {
    return (
        <NativeBaseProvider>
          <Box flex={1} safeArea>
    
                {/*---------------------Encabezado-------------------------*/}
                <Box bg="white" py={4} alignItems="center">
                <Text fontSize="5xl" color="black" fontWeight="bold">Overlay</Text>
                </Box>
    
            <HStack flex={1}>
              {/*---------------------Primer espacio con AlertDialog-------------------------*/}
              <Box flex={1} bg="coolGray.400" justifyContent="flex-start" alignItems="center" p={4}>
                <Text fontSize="xl" mt={5}>AlertDialog</Text>
                <Center flex={1}><AlertExample /></Center>  
              </Box>
    
              {/*---------------------Segundo espacio con Menu------------------------------*/}
              <Box flex={1} bg="coolGray.400" justifyContent="flex-start" alignItems="center" p={4}>
                <Text fontSize="xl" mt={5}>Menu</Text>
                <Center flex={1}><MenuExample /></Center>    
              </Box>
    
              {/*---------------------Tercer espacio con Modal------------------------------*/}
              <Box flex={1} bg="coolGray.400" justifyContent="flex-start" alignItems="center" p={4}>
                <Text fontSize="xl" mt={5}>Modal</Text>
                <Center flex={1}><ModalExample /></Center>
              </Box>
    
              {/*---------------------Cuarto espacio con Popover------------------------------*/}
              <Box flex={1} bg="coolGray.400" justifyContent="flex-start" alignItems="center" p={4}>
                <Text fontSize="xl" mt={5}>Popover</Text>
                 <Center flex={1}><PopoverExample /></Center>
              </Box>
    
            </HStack>
            <StatusBar barStyle="auto" />
          </Box>
        </NativeBaseProvider>
      );
    }

export default MonitorScreen;