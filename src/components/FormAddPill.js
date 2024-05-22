import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

const FormAddPill = ({ addPill }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      day: '',
      time: '',
      dose: '',
    }
  });

  function handleAddPill(data) {
    addPill(data);
    reset(); // Reseta o formulário após adicionar o remédio
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicione seu medicamento</Text>
      
      <Controller
        control={control}
        name="name"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.pillName && styles.inputError]}
            placeholder="Nome do remédio"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.pillName && <Text style={styles.errorText}>Nome do remédio é obrigatório.</Text>}

      <Controller
        control={control}
        name="day"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={(itemValue) => onChange(itemValue)}
            style={[styles.input, errors.day && styles.inputError]}
          >
            <Picker.Item label="Selecione o dia" value="" />
            <Picker.Item label="Domingo" value="Domingo" />
            <Picker.Item label="Segunda-feira" value="Segunda-feira" />
            <Picker.Item label="Terça-feira" value="Terça-feira" />
            <Picker.Item label="Quarta-feira" value="Quarta-feira" />
            <Picker.Item label="Quinta-feira" value="Quinta-feira" />
            <Picker.Item label="Sexta-feira" value="Sexta-feira" />
            <Picker.Item label="Sábado" value="Sábado" />
          </Picker>
        )}
      />
      {errors.day && <Text style={styles.errorText}>O dia é obrigatório.</Text>}

      <Controller
        control={control}
        name="time"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={(itemValue) => onChange(itemValue)}
            style={[styles.input, errors.time && styles.inputError]}
          >
            <Picker.Item label="Selecione o horário" value="" />
            {[...Array(24)].map((_, hour) => (
              <Picker.Item key={hour} label={`${hour}:00`} value={`${hour}:00`} />
            ))}
          </Picker>
        )}
      />
      {errors.time && <Text style={styles.errorText}>O horário é obrigatório.</Text>}

      <Controller
        control={control}
        name="dose"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.dose && styles.inputError]}
            placeholder="Dose (ex: 1 comprimido)"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.dose && <Text style={styles.errorText}>A dose é obrigatória.</Text>}

      <Button title="Adicionar" onPress={handleSubmit(handleAddPill)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 50,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default FormAddPill;
