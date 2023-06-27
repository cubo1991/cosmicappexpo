import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/Redux/Store';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Jugadores } from './src/screens/Jugadores';
import FormCrearJugadores from './src/screens/FormCrearJugadores';
import { FormAgregarPuntajes } from './src/screens/formAgregarPuntajes';





axios.defaults.baseURL=  'https://us-central1-cosmicappback.cloudfunctions.net/app/api'

const Stack = createStackNavigator()


function MyStack (){
  return(
<Stack.Navigator>
<Stack.Screen name='Agregar puntaje' component={FormAgregarPuntajes}/>
<Stack.Screen name='Agregar jugadores' component={FormCrearJugadores}/>
<Stack.Screen name='jugadores' component={Jugadores}/>


</Stack.Navigator>
  )
}

export default function App() {

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
<NavigationContainer>
<MyStack/>
</NavigationContainer>

    </PersistGate>
    </Provider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
