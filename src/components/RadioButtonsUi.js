import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButtonsUi = ({ onSelectedDay }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option, index) => {
    setSelectedOption(index);
    onSelectedDay(option);
  };

  const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  return (
    <View style={styles.container}>
      {days.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.radioButton,
            selectedOption === index && styles.radioButtonActive,
          ]}
          onPress={() => handleSelectOption(option, index)}
        >
          <Text style={styles.radioButtonText}>{option.charAt(0)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
  },
  radioButton: {
    width: 45,
    height: 45,
    borderRadius: 99999,
    backgroundColor: '#05CDC1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  radioButtonActive: {
    backgroundColor: '#00665F', // Altere essa cor conforme necessário
  },
});

export default RadioButtonsUi;
