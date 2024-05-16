import { statusBar, Text, View } from 'react-native';
import React from 'react'
import FormCadastro from '../../components/FormCadastro'

export function SignUp() {
  return (
    <View className = " p-4 pt-20 ">
      <Text className = " self-center text-2xl">Cadastre-se gratuitamente</Text>
      <FormCadastro />
    </View>
  )
}