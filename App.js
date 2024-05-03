import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function App(){
    return (
      <View style={styles.container}>
        <Image source={require('./src/assets/LogoCompleto.svg')} />
      </View>
    )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
