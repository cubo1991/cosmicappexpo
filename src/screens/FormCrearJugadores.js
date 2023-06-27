import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { postJugador } from '../Redux/actions/postJugadores';
import { fetchJugadores } from '../Redux/actions/getJugadores';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const formCrearJugadores = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    nombre: yup.string().required('Este campo es requerido'),
    color: yup.string().required('Este campo es requerido'),
    puntos: yup.number().moreThan(-1,'Debe ser un número positivo'),
    copas: yup.number().moreThan(-1,'Debe ser un número positivo'),
    campañas: yup.number().moreThan(-1,'Debe ser un número positivo'),
    ranking: yup.number().moreThan(-1,'Debe ser un número positivo'),
    partidas: yup.number().moreThan(-1,'Debe ser un número positivo'),
    colonias: yup.number().moreThan(-1,'Debe ser un número positivo'),
    victorias: yup.number().moreThan(-1,'Debe ser un número positivo'),
    victoriasEspeciales: yup.number().moreThan(-1,'Debe ser un número positivo'),
    ataqueSolitario: yup.number().moreThan(-1,'Debe ser un número positivo'),
    defensaSolitario: yup.number().moreThan(-1,'Debe ser un número positivo'),
    cumpleaños: yup.date().nullable(),
    biografia: yup.string(),
  });

  const onSubmit = (values) => {
    dispatch(postJugador(values))
      .then(() => dispatch(fetchJugadores()));
      console.log(values)
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      nombre: '',
      color: '',
      puntos: '',
      copas: '',
      campañas: '',
      ranking: '',
      partidas: '',
      colonias: '',
      victorias: '',
      victoriasEspeciales: '',
      ataqueSolitario: '',
      defensaSolitario: '',
      cumpleaños: null,
      biografia: '',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('nombre')}
        value={formik.values.nombre}
      />
      {formik.errors.nombre && <Text style={styles.error}>{formik.errors.nombre}</Text>}

      <Text style={styles.label}>Color</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('color')}
        value={formik.values.color}
      />
      {formik.errors.color && <Text style={styles.error}>{formik.errors.color}</Text>}

      <Text style={styles.label}>Puntos</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('puntos')}
        value={formik.values.puntos.toString()}
        keyboardType="numeric"
      />
      {formik.errors.puntos && <Text style={styles.error}>{formik.errors.puntos}</Text>}

      <Text style={styles.label}>Copas</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('copas')}
        value={formik.values.copas.toString()}
        keyboardType="numeric"
      />
      {formik.errors.copas && <Text style={styles.error}>{formik.errors.copas}</Text>}

      <Text style={styles.label}>Campañas</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('campañas')}
        value={formik.values.campañas.toString()}
        keyboardType="numeric"
      />
      {formik.errors.campañas && <Text style={styles.error}>{formik.errors.campañas}</Text>}

      <Text style={styles.label}>Ranking</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('ranking')}
        value={formik.values.ranking.toString()}
        keyboardType="numeric"
      />
      {formik.errors.ranking && <Text style={styles.error}>{formik.errors.ranking}</Text>}

      <Text style={styles.label}>Partidas</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('partidas')}
        value={formik.values.partidas.toString()}
        keyboardType="numeric"
      />
      {formik.errors.partidas && <Text style={styles.error}>{formik.errors.partidas}</Text>}

      <Text style={styles.label}>Colonias</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('colonias')}
        value={formik.values.colonias.toString()}
        keyboardType="numeric"
      />
      {formik.errors.colonias && <Text style={styles.error}>{formik.errors.colonias}</Text>}

      <Text style={styles.label}>Victorias</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('victorias')}
        value={formik.values.victorias.toString()}
        keyboardType="numeric"
      />
      {formik.errors.victorias && <Text style={styles.error}>{formik.errors.victorias}</Text>}

      <Text style={styles.label}>Victorias Especiales</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('victoriasEspeciales')}
        value={formik.values.victoriasEspeciales.toString()}
        keyboardType="numeric"
      />
      {formik.errors.victoriasEspeciales && <Text style={styles.error}>{formik.errors.victoriasEspeciales}</Text>}

      <Text style={styles.label}>Ataque Solitario</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('ataqueSolitario')}
        value={formik.values.ataqueSolitario.toString()}
        keyboardType="numeric"
      />
      {formik.errors.ataqueSolitario && <Text style={styles.error}>{formik.errors.ataqueSolitario}</Text>}

      <Text style={styles.label}>Defensa Solitario</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('defensaSolitario')}
        value={formik.values.defensaSolitario.toString()}
        keyboardType="numeric"
      />
      {formik.errors.defensaSolitario && <Text style={styles.error}>{formik.errors.defensaSolitario}</Text>}

      <Text style={styles.label}>Fecha de nacimiento</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('cumpleaños')}
        value={formik.values.cumpleaños}
        keyboardType="numeric"
      />
      {formik.errors.cumpleaños && <Text style={styles.error}>{formik.errors.cumpleaños}</Text>}

      <Text style={styles.label}>Biografía</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('biografia')}
        value={formik.values.biografia}
        multiline={true}
        numberOfLines={6}
      />
      {formik.errors.biografia && <Text style={styles.error}>{formik.errors.biografia}</Text>}

      <Button onPress={formik.handleSubmit} title="Guardar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default formCrearJugadores;