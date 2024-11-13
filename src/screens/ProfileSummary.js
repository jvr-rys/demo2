
import { Box, VStack, Text, Icon, Center, Row, Button } from 'native-base'; // Importa componentes de Native Base
import { Ionicons } from '@expo/vector-icons'; // Importa íconos de Ionicons

// Componente que muestra un resumen del perfil del usuario
const ProfileSummaryScreen = ({ navigation, route }) => {
  // Desestructura los datos recibidos a través de route.params, y establece valores predeterminados
  const { name, age, email, phone, address } = route.params || {};

  return (
    // Center para centrar el contenido vertical y horizontalmente
    <Center flex={1} bg="gray.50" mt="10">
      <Box
        p="5" // Padding de 5
        alignItems="center" // Alinea el contenido en el centro
        bg="white" // Fondo blanco
        borderRadius="lg" // Bordes redondeados
        shadow={3} // Añade sombra
        width="90%" // Ancho del 90% del contenedor
        maxW="400px" // Ancho máximo de 400px
      >
        <VStack space={4} width="100%">
          <Text fontSize="xl" bold color="primary.500">
            Resumen de Perfil
          </Text>

          <VStack space={3} width="100%">
            {/* Mostrar datos del perfil */}
            <Row space={3} alignItems="center">
              <Icon as={Ionicons} name="person" size="lg" color="primary.500" />
              <Text fontSize="md" color="gray.700">Nombre: {name || "No proporcionado"}</Text>
            </Row>

            <Row space={3} alignItems="center">
              <Icon as={Ionicons} name="calendar" size="lg" color="primary.500" />
              <Text fontSize="md" color="gray.700">Edad: {age || "No proporcionada"}</Text>
            </Row>

            <Row space={3} alignItems="center">
              <Icon as={Ionicons} name="mail" size="lg" color="primary.500" />
              <Text fontSize="md" color="gray.700">Correo: {email || "No proporcionado"}</Text>
            </Row>

            <Row space={3} alignItems="center">
              <Icon as={Ionicons} name="call" size="lg" color="primary.500" />
              <Text fontSize="md" color="gray.700">Teléfono: {phone || "No proporcionado"}</Text>
            </Row>

            <Row space={3} alignItems="center">
              <Icon as={Ionicons} name="home" size="lg" color="primary.500" />
              <Text fontSize="md" color="gray.700">Dirección: {address || "No proporcionada"}</Text>
            </Row>
          </VStack>

          {/* Botón de regresar al inicio */}
          <Button
            mt="5" // Margen superior de 5
            colorScheme="primary" // Esquema de color principal
            onPress={() => navigation.navigate('Home')} // Navega a la pantalla de inicio
          >
            Regresar al Inicio
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default ProfileSummaryScreen;
