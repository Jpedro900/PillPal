import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens/login/login'
import { CadastroDeUsuario } from '../screens/CadastroDeUsuario/CadastroDeUsuario'
import AppHomePage from '../screens/AppHomePage/AppHomePage'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CadastroDeUsuario" component={CadastroDeUsuario} />
            <Stack.Screen name="AppHomePage" component={AppHomePage} />
        </Stack.Navigator>
    )
}