import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FormLogin from '../../components/FormLogin';
import ButtonUi from '../../components/ui/ButtonUi';

export function Login({ navigation }) {
  const goToCadastroDeUsuario = () => {
    navigation.navigate('CadastroDeUsuario');
  };

  return (
    <View className="p-4 pt-20 bg-white h-full w-full">
      <Image className="w-36 h-36 self-center" source={require('../../assets/logoCompleto.png')} />
      <Text className="text-start text-2xl font-bold mt-4">Login</Text>
      <Text className="text-lg text-start mt-2 text-gray-500">Use seu e-mail para conectar</Text>
      <FormLogin />
      <View className=" mt-4">
        <ButtonUi title="Login" screen="AppHomePage"/>
      </View>
      <Text className="text-blue-700 underline mt-4">Esqueceu a sua senha?</Text>
      <TouchableOpacity onPress={goToCadastroDeUsuario}>
        <Text className="text-blue-700 underline mt-2">Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}
