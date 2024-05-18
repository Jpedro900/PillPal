import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ButtonUi from './ui/ButtonUi';
import PasswordStrengthMeterBar from 'react-native-password-strength-meter-bar';

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setEqualPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value === confirmPassword) {
      setPasswordMatch('Equal');
    } else {
      setPasswordMatch('Different');
    }
  };

  const handleEqualPasswordChange = (value) => {
    setEqualPassword(value);
    if (value === password) {
      setPasswordMatch('Equal');
    } else {
      setPasswordMatch('Different');
    }
  };

  return (
    <View>
      <View className="flex justify-around h-[320px] gap-4">
        <View>
          <TextInput
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className="border-[1px] border-gray-600 p-2 px-4 rounded-md w-full"
          />
        </View>
        <View className="relative">
          <TextInput
            placeholder="Senha"
            secureTextEntry={!showPassword}
            className="border-[1px] border-gray-600 p-2 px-4 rounded-md w-full"
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity
            className = " absolute right-2 top-2"
            onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={30} color="black" />
          </TouchableOpacity>
          <PasswordStrengthMeterBar password={password} />
          <Text>A senha deve conter:{'\n'}
            <FlatList
              data={[
                { key: '• Pelo menos 8 caracteres' },
                { key: '• Pelo menos 1 letra maiúscula' },
                { key: '• Pelo menos 1 número' },
                { key: '• Pelo menos 1 caractere especial' },
              ]}
              renderItem={({ item }) => <Text>{item.key}</Text>}
            />
          </Text>
        </View>
        <View className="relative">
          <TextInput
            placeholder="Confirme sua senha"
            secureTextEntry={!showPassword}
            className="border-[1px] border-gray-600 p-2 px-4 rounded-md w-full"
            onChangeText={handleEqualPasswordChange}
          />
          <TouchableOpacity
            className = " absolute right-2 top-2"
            onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={30} color="black" />
          </TouchableOpacity>
          {passwordMatch === 'Different' && <Text className=" text-red-600">As senhas não são iguais</Text>}
        </View>
      </View>      
    </View>
  );
};


export default FormLogin;
