import React from 'react';
import { Button , View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ButtonUi = (props) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(props.screen);
  };

  return (

    <View className=" h-12 w-full">
      <Button
        color="#1554F6"
        title={props.title}
        onPress={handlePress}
      />
    </View>
  );
};

export default ButtonUi;
