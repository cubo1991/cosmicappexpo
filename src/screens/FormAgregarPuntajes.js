import React, { useState, useEffect } from 'react';
import { View, Text, Picker, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchJugadores } from '../Redux/actions/getJugadores';
import { fetchCopas } from '../Redux/actions/getCopa';
import { putPuntosJugadores } from '../Redux/actions/putPuntosJugadores';
import { putRanking } from '../Redux/actions/putRanking';
import { Checkbox } from 'react-native-paper';

export const FormAgregarPuntajes = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});
  const [copaData, setCopaData] = useState({
    copaId: '',
  });

  useEffect(() => {
    dispatch(fetchJugadores());
    dispatch(fetchCopas());
  }, [dispatch, copaData]);

  const jugadoresState = useSelector((state) => state.jugadores);
  const copasState = useSelector((state) => state.copas);

  const [ordenados, setOrdenados] = useState([]);
  const [jugadoresPodio, setJugadoresPodio] = useState([]);
  const [noJugo, setNoJugo] = useState({});

  const copaEncontrada = copasState.find((copa) => copa._id === copaData.copaId) || null;

  useEffect(() => {
    if (copaEncontrada) {
      const jugadoresCopa = jugadoresState.filter((jugador) =>
        jugador.copasJugadas.some((copaJugada) => copaJugada.copa === copaData.copaId)
      );
      const jugadoresPodio = jugadoresCopa.map((jugador) => {
        const jugadoresCopa = { ...jugador, copasJugadas: jugador.copasJugadas.find((copa) => copa.copa === copaData.copaId) };
        return jugadoresCopa;
      });
      setJugadoresPodio(jugadoresPodio);
    }
  }, [copaData.copaId, copasState, jugadoresState]);

  const renderJugadores = jugadoresPodio.map((jugador) => {
    const puntajesJugador = [];
    for (let i = 0; i < copaEncontrada.cantidadPartidas; i++) {
      puntajesJugador.push(jugador.puntosPartidas[i]);
    }

    const numbers = jugador.copasJugadas.puntos;
    const total = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    return [total, jugador._id];
  });

  useEffect(() => {
    if (ordenados.length) {
      dispatch(putRanking(ordenados));
    }
  }, [ordenados, dispatch]);

  const handleInputChange = (jugadorId, fieldName, value) => {
    const updatedJugadores = jugadoresPodio.map((jugador) => {
      if (jugador._id === jugadorId) {
        const updatedJugador = { ...jugador, [fieldName]: value };
        return updatedJugador;
      }
      return jugador;
    });

    setJugadoresPodio(updatedJugadores);

    const updatedFormValues = { ...formValues, [`${fieldName}-${jugadorId}`]: value };
    setFormValues(updatedFormValues);
  };

  const handleCheckboxChange = (jugadorId) => {
    const updatedNoJugo = { ...noJugo, [jugadorId]: !noJugo[jugadorId] };
    setNoJugo(updatedNoJugo);
  };

  const generarJugadoresConPuntos = () => {
    const jugadoresConPuntos = jugadoresPodio.map((jugador) => {
      const puntosPartidas = [];
      for (let i = 0; i < copaEncontrada.cantidadPartidas; i++) {
        puntosPartidas.push(Number(jugador.puntosPartidas[i]));
      }

      if (noJugo[jugador._id]) {
        return {
          idJugador: jugador._id,
          noJugo: true
        };
      } else {
        return {
          idJugador: jugador._id,
          coloniasInternas: formValues[`coloniasInternas-${jugador._id}`] || 0,
          coloniasExternas: formValues[`coloniasExternas-${jugador._id}`] || 0,
          puntosVictoria: formValues[`puntosVictoria-${jugador._id}`] || 0,
          victoriasEspeciales: formValues[`victoriaEspecial-${jugador._id}`] || 0,
          ataqueSolitario: formValues[`ataqueSolitario-${jugador._id}`] || 0,
          defensaSolitaria: formValues[`defensaSolitaria-${jugador._id}`] || 0,
          puntosPartidas: puntosPartidas
        };
      }
    });

    return jugadoresConPuntos.filter((jugador) => !jugador.noJugo);
  };

  const handleSubmit = () => {
    const jugadoresConPuntos = generarJugadoresConPuntos();
    dispatch(putPuntosJugadores(jugadoresConPuntos));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Puntajes</Text>

      <Picker
        style={styles.picker}
        selectedValue={copaData.copaId}
        onValueChange={(itemValue) => setCopaData({ ...copaData, copaId: itemValue })}
      >
        {copasState.map((copa) => (
          <Picker.Item key={copa._id} label={copa.nombre} value={copa._id} />
        ))}
      </Picker>

      {copaEncontrada && (
        <View>
          <FlatList
            data={jugadoresPodio}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.jugadorContainer}>
                <Text style={styles.jugadorNombre}>{item.nombre}</Text>
                {!item.noJugo && (
                  <View style={styles.jugadorPuntajes}>
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="Colonias Internas"
                      value={formValues[`coloniasInternas-${item._id}`]}
                      onChangeText={(value) =>
                        handleInputChange(item._id, 'coloniasInternas', value)
                      }
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="Colonias Externas"
                      value={formValues[`coloniasExternas-${item._id}`]}
                      onChangeText={(value) =>
                        handleInputChange(item._id, 'coloniasExternas', value)
                      }
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="Puntos Victoria"
                      value={formValues[`puntosVictoria-${item._id}`]}
                      onChangeText={(value) =>
                        handleInputChange(item._id, 'puntosVictoria', value)
                      }
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="Victorias Especiales"
                      value={formValues[`victoriaEspecial-${item._id}`]}
                      onChangeText={(value) =>
                        handleInputChange(item._id, 'victoriaEspecial', value)
                      }
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="Ataque Solitario"
                      value={formValues[`ataqueSolitario-${item._id}`]}
                      onChangeText={(value) =>
                        handleInputChange(item._id, 'ataqueSolitario', value)
                      }
                    />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="Defensa Solitaria"
                      value={formValues[`defensaSolitaria-${item._id}`]}
                      onChangeText={(value) =>
                        handleInputChange(item._id, 'defensaSolitaria', value)
                      }
                    />
                  </View>
                )}
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={noJugo[item._id] ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxChange(item._id)}
                  />
                  <Text>No jugó</Text>
                </View>
              </View>
            )}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  jugadorContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  jugadorNombre: {
    flex: 1,
    fontSize: 16,
  },
  jugadorPuntajes: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


