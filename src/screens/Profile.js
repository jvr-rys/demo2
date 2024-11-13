// Importa React y el hook useState para manejar el estado local
import React, { useState } from 'react'; //Agregado el import de useState
import { KeyboardAvoidingView, Platform } from 'react-native'; // Importa componentes para manejar el teclado en dispositivos móviles
import { FormControl, Input, Button, VStack, Text, WarningOutlineIcon, TextArea, Slider, Checkbox, Select, ScrollView } from 'native-base'; // Importa componentes de NativeBase para crear el formulario

// Componente principal que representa el formulario de perfil
const ProfileFormScreen = ({ navigation }) => {
    // Definición de estados para almacenar los valores de cada campo del formulario
    const [name, setName] = useState("");
    const [age, setAge] = useState(18);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [occupation, setOccupation] = useState("");
    const [bio, setBio] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Función que maneja la acción de guardar el formulario
    const handleSave = () => {
        setIsLoading(true); // Activa el estado de carga
        setError(""); // Reinicia el mensaje de error

        // Verifica que los campos obligatorios no estén vacíos
        if (!name || !email || !phone || !address || !termsAccepted) {
            setError("Todos los campos son obligatorios y debes aceptar los términos."); // Muestra un mensaje de error si falta algún campo
            setIsLoading(false); // Detiene el estado de carga
            return;
        }

        // Simula la acción de guardar con un retraso
        setTimeout(() => {
            setIsLoading(false); // Termina la carga
            // Navega a la pantalla de resumen con los datos del formulario
            navigation.navigate('ProfileSummary', { name, age, email, phone, address, gender, occupation, bio });
        }, 1000);
    };

    return (
        // Evita que el teclado cubra el contenido en dispositivos móviles
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Configuración específica para iOS
            style={{ flex: 1 }}
            enabled={Platform.OS !== 'web'} // Evita aplicar el comportamiento en la web
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, padding: 16, minHeight: '100%' }} // Estilos para scroll en el formulario
                showsVerticalScrollIndicator={false}
            >
                <VStack space={4}>

                    <FormControl isInvalid={!name}>
                        <FormControl.Label>Nombre</FormControl.Label>
                        <Input
                            placeholder="Ingresa tu nombre"
                            value={name}
                            onChangeText={text => setName(text)} // Actualiza el estado del nombre
                        />
                        {!name && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Este campo es obligatorio.</FormControl.ErrorMessage>}
                    </FormControl>

                    <FormControl isInvalid={age < 18}>
                        <FormControl.Label>Edad</FormControl.Label>
                        <Slider
                            value={age}
                            onChange={setAge} // Actualiza el estado de la edad
                            minValue={18}
                            maxValue={100}
                            step={1} // Incrementos de 1 año
                        >
                            <Slider.Track>
                                <Slider.FilledTrack />
                            </Slider.Track>
                            <Slider.Thumb />
                        </Slider>
                        <Text>Edad: {age}</Text>
                        {age < 18 && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Debes ser mayor de 18 años.</FormControl.ErrorMessage>}
                    </FormControl>

                    <FormControl isInvalid={!email}>
                        <FormControl.Label>Correo Electrónico</FormControl.Label>
                        <Input
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChangeText={text => setEmail(text)} // Actualiza el estado del correo
                            keyboardType="email-address"
                        />
                        {!email && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Este campo es obligatorio.</FormControl.ErrorMessage>}
                    </FormControl>

                    <FormControl isInvalid={!phone}>
                        <FormControl.Label>Teléfono</FormControl.Label>
                        <Input
                            placeholder="Ingresa tu teléfono"
                            value={phone}
                            onChangeText={text => setPhone(text)} // Actualiza el estado del teléfono
                            keyboardType="phone-pad"
                        />
                        {!phone && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Este campo es obligatorio.</FormControl.ErrorMessage>}
                    </FormControl>

                    <FormControl isInvalid={!address}>
                        <FormControl.Label>Dirección</FormControl.Label>
                        <TextArea
                            placeholder="Ingresa tu dirección"
                            value={address}
                            onChangeText={text => setAddress(text)} // Actualiza el estado de la dirección
                            autoCompleteType="street-address"
                        />
                        {!address && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Este campo es obligatorio.</FormControl.ErrorMessage>}
                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Género</FormControl.Label>
                        <Select
                            placeholder="Selecciona tu género"
                            selectedValue={gender}
                            onValueChange={itemValue => setGender(itemValue)} // Actualiza el estado del género
                        >
                            <Select.Item label="Masculino" value="male" />
                            <Select.Item label="Femenino" value="female" />
                            <Select.Item label="Otro" value="other" />
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Ocupación</FormControl.Label>
                        <Input
                            placeholder="Ingresa tu ocupación"
                            value={occupation}
                            onChangeText={text => setOccupation(text)} // Actualiza el estado de la ocupación
                        />
                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Biografía</FormControl.Label>
                        <TextArea
                            placeholder="Cuéntanos un poco sobre ti"
                            value={bio}
                            onChangeText={text => setBio(text)} // Actualiza el estado de la biografía
                        />
                    </FormControl>

                    <FormControl isInvalid={!termsAccepted}>
                        <Checkbox
                            isChecked={termsAccepted}
                            onChange={setTermsAccepted} // Actualiza el estado de aceptación de términos
                        >
                            Acepto los términos y condiciones
                        </Checkbox>
                        {!termsAccepted && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Debes aceptar los términos y condiciones.</FormControl.ErrorMessage>}
                    </FormControl>

                    {error && <Text color="red.500" fontSize="sm">{error}</Text>}

                    <Button onPress={handleSave} isLoading={isLoading} isLoadingText="Guardando...">
                        Guardar
                    </Button>
                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ProfileFormScreen;
