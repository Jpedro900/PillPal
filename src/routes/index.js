import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens/login/login'
import { SignUp } from '../screens/CadastroDeUsuario/CadastroDeUsuario'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="RegistroDeUsuario" component={SignUp} />
        </Stack.Navigator>
    )
}