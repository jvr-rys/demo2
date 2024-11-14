import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, VStack, Collapse, Alert, HStack, Text, IconButton, CloseIcon, Box, Button, Progress, Skeleton, Spinner, Heading, useToast } from 'native-base';
import { StyleSheet, SafeAreaView } from 'react-native';

const Alerts = () => {
  const [showAlerta, setShowAlerta] = useState(false);
  const [showProgreso, setShowProgreso] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toast = useToast();

  useEffect(() => {
    let timer;
    if (showProgreso) {
      timer = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 100);
    } else {
      setProgress(0);
    }
    return () => clearInterval(timer);
  }, [showProgreso]);

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <VStack w='100%' alignItems='center'>

          <Text fontSize='xl' fontWeight="medium" >
            Feedback
          </Text>

          <Box w='100%' alignItems='center' p='4'>
            <Text fontSize='xl' fontWeight="medium">
              Alerta
            </Text>
            <Collapse isOpen={showAlerta} pt='4' paddingX='60'>
              <Alert maxW="400" status="error">
                <VStack space={1} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                    <HStack flexShrink={1} space={2} alignItems="center">
                      <Alert.Icon />
                      <Text fontSize="md" fontWeight="medium" _dark={{ color: "coolGray.800" }}>
                        Please try again later!
                      </Text>
                    </HStack>
                    <IconButton variant="unstyled" _focus={{ borderWidth: 0 }} icon={<CloseIcon size="3" />} _icon={{ color: "coolGray.600" }} onPress={() => setShowAlerta(false)} />
                  </HStack>
                  <Box pl="6" _dark={{ _text: { color: "coolGray.600" } }}>
                    Your coupon could not be processed at this time.
                  </Box>
                </VStack>
              </Alert>
            </Collapse>
            <Button size="sm" onPress={() => setShowAlerta(true)} mt={8} mx="auto">
              Alerta
            </Button>
          </Box>

          <Box w='100%' alignItems='center' p='4'>
            <Text fontSize='xl' fontWeight="medium">
              Barra de Progreso
            </Text>
            <Collapse isOpen={showProgreso} pt='4' paddingX='60'>
              <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                <HStack flexShrink={1} space={2} alignItems="center">
                  <Box w="90%" maxW="400">
                    <Progress size="xl" colorScheme="warning" value={progress} />
                  </Box>
                </HStack>
                <IconButton variant="unstyled" _focus={{ borderWidth: 0 }} icon={<CloseIcon size="3" />} _icon={{ color: "coolGray.600" }} onPress={() => setShowProgreso(false)} />
              </HStack>
            </Collapse>
            <Button size="sm" onPress={() => setShowProgreso(true)} mt={8} mx="auto">
              Barra de Progreso
            </Button>
          </Box>

          <Box w='100%' alignItems='center' p='4'>
            <Text fontSize='xl' fontWeight="medium">
              Skeleton
            </Text>
            <Collapse isOpen={showSkeleton} pt='4' paddingX='10'>
              <HStack maxW="100%" flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                <HStack w="100%" flexShrink={1} space={2} alignItems="center">
                  <HStack w="300" borderWidth="1" space={8} rounded="md" _dark={{
                    borderColor: "coolGray.500"
                  }} _light={{
                    borderColor: "coolGray.200"
                  }} p="4">
                    <Skeleton flex="1" h="150" w="100%" rounded="md" startColor="coolGray.100" />
                    <VStack flex="3" space="4">
                      <Skeleton startColor="amber.300" />
                      <Skeleton.Text />
                      <HStack space="2" alignItems="center">
                        <Skeleton size="5" rounded="full" />
                        <Skeleton h="3" flex="2" rounded="full" />
                        <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                      </HStack>
                    </VStack>
                  </HStack>
                </HStack>
                <IconButton variant="unstyled" _focus={{ borderWidth: 0 }} icon={<CloseIcon size="3" />} _icon={{ color: "coolGray.600" }} onPress={() => setShowSkeleton(false)} />
              </HStack>
            </Collapse>
            <Button size="sm" onPress={() => setShowSkeleton(true)} mt={8} mx="auto">
              Skeleton
            </Button>
          </Box>

          <Box w='100%' alignItems='center' p='4'>
            <Text fontSize='xl' fontWeight="medium">
              Spinner
            </Text>
            <Collapse isOpen={showSpinner} pt='4' paddingX='60'>
              <HStack maxW="100%" h="50" flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                <HStack w="100%" flexShrink={1} space={2} alignItems="center">
                  <Spinner size="lg" color="amber.500" accessibilityLabel="Loading posts" />
                  <Heading color="amber.500" fontSize="lg">
                    Cargando
                  </Heading>
                </HStack>
                <IconButton variant="unstyled" _focus={{ borderWidth: 0 }} icon={<CloseIcon size="3" />} _icon={{ color: "coolGray.600" }} onPress={() => setShowSpinner(false)} />
              </HStack>
            </Collapse>
            <Button size="sm" onPress={() => setShowSpinner(true)} mt={8} mx="auto">
              Spinner
            </Button>
          </Box>

          <Box w='100%' alignItems='center' p='4'>
            <Text fontSize='xl' fontWeight="medium">
              Toast
            </Text>
            <Collapse isOpen={showToast} pt='4' paddingX='60'>
              <HStack maxW="100%" h="50" flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                <HStack w="100%" flexShrink={1} space={2} alignItems="center">
                  <Button onPress={() => {
                    toast.show({
                      description: "Toast "
                    });
                  }}>
                    Toast x3
                  </Button>
                </HStack>
                <IconButton wMax='5' variant="unstyled" _focus={{ borderWidth: 0 }} icon={<CloseIcon size="3" />} _icon={{ color: "coolGray.600" }} onPress={() => setShowToast(false)} />
              </HStack>
            </Collapse>
            <Button size="sm" onPress={() => setShowToast(true)} mt={8} mx="auto">
              Toast
            </Button>
          </Box>


        </VStack>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Alerts;