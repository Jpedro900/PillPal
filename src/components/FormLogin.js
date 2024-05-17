import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ButtonUi from './ui/ButtonUi';

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="mt-4 flex justify-around h-[160px]">
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        className="border-[1px] border-gray-600 p-2 px-4 rounded-md w-full"
      />
      <View className="relative">
        <TextInput
          placeholder="Senha"
          secureTextEntry={!showPassword}
          className="border-[1px] border-gray-600 p-2 px-4 rounded-md w-full"
        />
        <TouchableOpacity
          className = " absolute right-2 top-2"
          onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={30} color="black" />
        </TouchableOpacity>
      </View>
      <ButtonUi title="Login"/>
    </View>
  );
};

export default FormLogin;
