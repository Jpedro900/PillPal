import { Text, View } from 'react-native';
import React from 'react'
import FormCadastro from '../../components/FormCadastro'
import ButtonUi from '../../components/ui/ButtonUi';

export function CadastroDeUsuario() {
  return (
    <View className = " p-4 pt-20 ">
      <Text className = " self-center text-2xl mb-6">Cadastre-se gratuitamente</Text>
      <FormCadastro />
      <View className=" mt-4"> 
        <ButtonUi title="Cadastrar" screen="Login"/>
      </View>
    </View>
  )
}